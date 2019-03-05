import json, os, re

class Examples():
    def __init__(self):
        self.current_dirname    = os.path.dirname(__file__)
        self.examples_dirname   = os.path.join(self.current_dirname, 'examples')
        self.functions          = self.get_functions()
        self.examples_filenames = self.get_examples_filenames()

    def create_docstrings(self):
        docstrings = {}
        for function in self.functions:
            docstrings[function] = self.get_docstring(function)
        return docstrings

    def create_example_contents(self):
        contents = {}
        for function, filenames in self.examples_filenames.items():
            contents[function] = []
            for filename in filenames:
                example = self.read_example(function, filename)
                content = self.extract_example_content(example)
                contents[function].append(content)
        return contents

    def create_example_names(self):
        names = {}
        for function, filenames in self.examples_filenames.items():
            names[function] = []
            for filename in filenames:
                example = self.read_example(function, filename)
                name    = self.extract_example_name(example)
                names[function].append(name)
        return names

    def extract_example_content(self, example):
        if example[0] == '#':
            # ignore the first line that contains the example name as a comment, ex # abs(123)
            pieces  = example.split('\n', 1)
            example = pieces[1]
        return example

    def extract_example_name(self, example):
        if example[0] == '#':
            # extract the example name from the first line that is a comment, ex # abs(123)
            pieces = example.split('\n', 1)
            name   = pieces[0].strip('# ')
        else:
            # extract the example name inside the print() function, ex print(abs(123))
            name = example[6:-2]
        name = self.htlm_escape(name)
        return name

    def generate(self):
        docstrings = self.create_docstrings()
        self.write_file('docstrings', docstrings)
        contents = self.create_example_contents()
        self.write_file('example_contents', contents)
        names = self.create_example_names()
        self.write_file('example_names', names)

    def get_docstring(self, function):
        docstring = eval(function + '.__doc__')
        docstring = self.htlm_escape(docstring)
        docstring = re.sub('([^.:\n])\n(.)', r'\1 \2', docstring)          # join string pieces, ex dir.__doc__
        docstring = docstring.replace('\n', '<br>\n')                      # fix linefeed
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

    def read_example(self, function, example_filename):
        path = os.path.join(self.examples_dirname, function + '/' + example_filename)
        with open(path, 'r') as file:
            example = file.read()
        return example

    def write_file(self, basename, data):
        filename = 'generated/' + basename + '.js'
        path     = os.path.join(self.current_dirname, filename)
        with open(path, 'w') as file:
            content  = 'var ' + basename + ' = ' + json.dumps(data, indent=4, sort_keys=True) + ';'
            file.write(content)
        print(filename, 'updated')

examples = Examples()
examples.generate()
