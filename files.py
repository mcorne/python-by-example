import os, re

class Files():
    DOCSTRINGS = "docstrings.js"
    OPTIONS    = "options.js"

    def __init__(self):
        self.current_dirname  = os.path.dirname(__file__)
        self.examples_dirname = os.path.join(self.current_dirname, 'examples')
        self.functions = self.get_functions()

    def create_docstrings(self):
        docstrings = ''
        for function in self.functions:
            docstring = self.get_docstring(function)
            docstrings += '    "' + function + '":\n"' + docstring + '"'
            if function != self.functions[-1]:
                docstrings += ',\n\n'
        text = 'var docstrings = {\n' + docstrings + '\n};'
        return text

    def create_options(self):
        options = ''
        for function in self.functions:
            options += '<option>' + function + '</options>\\\n'
        text = 'var options = "\\\n' + options + '";'
        return text

    def generate(self):
        self.generate_docstrings()
        self.generate_options()

    def generate_docstrings(self):
        docstrings = self.create_docstrings()
        self.write_file(Files.DOCSTRINGS, docstrings)
        print(Files.DOCSTRINGS, 'updated')

    def generate_options(self):
        options = self.create_options()
        self.write_file(Files.OPTIONS, options)
        print(Files.OPTIONS, 'updated')

    def get_docstring(self, function):
        docstring = eval(function + '.__doc__')
        docstring = self.htlm_escape(docstring)
        docstring = re.sub('([^.:\n])\n(.)', r'\1 \2', docstring)          # join string pieces, ex dir.__doc__
        docstring = docstring.replace('\n', '<br>\\\n')                    # fix linefeed
        docstring = re.sub('^  ([^ ])', '&#8226; \\1', docstring, 0, re.M) # prefix indented list item with bullet
        docstring = re.sub(' +', ' ', docstring)                           # replace multiple spaces in list items
        return docstring

    def get_functions(self):
        functions = os.listdir(self.examples_dirname)
        return sorted(functions)

    def htlm_escape(self, string):
        return string.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;').replace('\\', '&#92;')

    def write_file(self, filename, text):
        path = os.path.join(self.current_dirname, filename)
        with open(path, 'w') as file:
            file.write(text)

files = Files()
# files.generate()
files.generate_docstrings()
