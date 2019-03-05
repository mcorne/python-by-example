import json, os, re

class Examples():
    DOCSTRINGS    = "docstrings.js"
    EXAMPLE_NAMES = "example_names.js"

    def __init__(self):
        self.current_dirname    = os.path.dirname(__file__)
        self.examples_dirname   = os.path.join(self.current_dirname, 'examples')
        self.functions          = self.get_functions()
        self.examples_filenames = self.get_examples_filenames()

    def create_docstrings(self):
        docstrings = ''
        for function in self.functions:
            docstring = self.get_docstring(function)
            docstrings += '    "' + function + '":\n"' + docstring + '"'
            if function != self.functions[-1]:
                docstrings += ',\n\n'
        content = 'var docstrings = {\n' + docstrings + '\n};'
        return content

    def create_example_names(self):
        names = {}
        for function, filenames in self.examples_filenames.items():
            names[function] = []
            for filename in filenames:
                example = self.read_example(function, filename)
                name    = self.extract_example_name(example)
                names[function].append(name)
        content = 'var example_names = \n' + json.dumps(names, indent=4, sort_keys=True) + '\n;'
        return content

    def extract_example_name(self, example):
        if example[0] == '#': # the first line contains the example short name as a comment, ex # abs(123)
            pieces = example.split('\n')
            name   = pieces[0].strip('# ')
        else:              # this is a one line example that begins with print, ex print(abs(123))
            name = example[6:-1]
        return name

    def generate(self):
        self.generate_docstrings()
        self.generate_example_names()

    def generate_docstrings(self):
        docstrings = self.create_docstrings()
        self.write_file(Examples.DOCSTRINGS, docstrings)
        print(Examples.DOCSTRINGS, 'updated')

    def generate_example_names(self):
        names = self.create_example_names()
        self.write_file(Examples.EXAMPLE_NAMES, names)
        print(Examples.EXAMPLE_NAMES, 'updated')

    def get_docstring(self, function):
        docstring = eval(function + '.__doc__')
        docstring = self.htlm_escape(docstring)
        docstring = re.sub('([^.:\n])\n(.)', r'\1 \2', docstring)          # join string pieces, ex dir.__doc__
        docstring = docstring.replace('\n', '<br>\\\n')                    # fix linefeed
        docstring = re.sub('^  ([^ ])', '&#8226; \\1', docstring, 0, re.M) # prefix indented list item with bullet
        docstring = re.sub(' +', ' ', docstring)                           # replace multiple spaces in list items
        return docstring

    def get_example_filenames(self, function):
        dirname   = os.path.join(self.examples_dirname, function)
        filenames = os.listdir(dirname)
        return sorted(filenames)

    def get_examples_filenames(self):
        filenames = {}
        for function in self.functions:
            filenames[function] = self.get_example_filenames(function)
        return filenames

    def get_functions(self):
        functions = os.listdir(self.examples_dirname)
        return sorted(functions)

    def htlm_escape(self, string):
        return string.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;').replace('\\', '&#92;')

    def parse_example(self, example): # TODO: remove !!!
        example = {}
        if example[0] == '#': # the first line contains the example short name as a comment, ex # abs(123)
            example["short"] = example[0].strip('# ')
            pieces           = example.split('\n')
            example["full"]  = pieces[1]
        else:              # this is a one line example that begins with print, ex print(abs(123))
            example["short"] = example[6:-1]
            example["full"]  = example
        return example

    def read_example(self, function, example_filename):
        path = os.path.join(self.examples_dirname, function + '/' + example_filename)
        with open(path, 'r') as file:
            example = file.read()
        return example

    def write_file(self, filename, content):
        path = os.path.join(self.current_dirname, filename)
        with open(path, 'w') as file:
            file.write(content)

examples = Examples()
# examples.generate()
# examples.generate_docstrings()
examples.generate_example_names()
