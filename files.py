import os

class Files():
    def __init__(self):
        self.current_dirname  = os.path.dirname(__file__)
        self.examples_dirname = os.path.join(self.current_dirname, 'examples')
        self.functions = []

    def create_options(self):
        options = ''
        for function in self.get_functions():
            options += '<option>' + function + '</options>\\\n'
        text = 'var options = "\\\n' + options + '";'
        return text

    def generate(self):
        self.generate_options()

    def generate_options(self):
        options = self.create_options()
        self.write_file('options.js', options)

    def get_functions(self):
        if (not self.functions):
            self.functions = os.listdir(self.examples_dirname)
            self.functions = sorted(self.functions)
        return self.functions

    def write_file(self, filename, text):
        path = os.path.join(self.current_dirname, filename)
        with open(path, 'w') as file:
            file.write(text)

files = Files()
files.generate()
