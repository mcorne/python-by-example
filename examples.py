import json, math, os, re, string

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
            # This is the first line containing the example name as a comment, ex # abs(123).
            # Skip the line.
            lines  = example.split('\n', 1)
            example = lines[1]
        return example

    def extract_example_name(self, example):
        lines = example.split('\n', 1)
        if example[0] == '#':
            # This is the first line containing the example name as a comment, ex # abs(123).
            # Extract the example name.
            name = lines[0].strip('# ')
        else:
            # This is a one line example, always beiginning with print, ex print(abs(123)).
            # Extract the example name inside the print function.
            name = lines[0][6:-1]
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
        docstring  = eval(function + '.__doc__')
        signature = self.get_signature(function)
        if signature != None:
            docstring = function + '(' + signature + ')' + '\n\n' + docstring
        docstring = self.htlm_escape(docstring)
        docstring = docstring.replace('\n', '<br>\n')
        docstring = docstring.replace(' ', '&nbsp;')
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

    def get_signature(self, function):
        try:
            signature = eval(function + '.__text_signature__')
        except:
            return

        if signature != None:
            signature = signature[1:-1]
            signature = signature.replace('$self', '')
            signature = signature.replace('$module', '')
            signature = signature.strip(',/ ')

        return signature

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
            content  = 'var ' + basename + ' = ' + json.dumps(data, ensure_ascii=False, indent=4, sort_keys=True) + ';'
            file.write(content)
        print(filename, 'updated')

examples = Examples()
examples.generate()
