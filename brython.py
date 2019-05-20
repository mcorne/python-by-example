import os
from requests import get

class Brython():
    def __init__(self):
        current_dirname      = os.path.dirname(__file__)
        self.brython_dirname = os.path.join(current_dirname, 'brython')

    def update_file(self, filename):
        path = os.path.join(self.brython_dirname, filename)
        with open(path, 'wb') as file:
            response = get('https://raw.githubusercontent.com/brython-dev/brython/master/www/src/' + filename)
            file.write(response.content)
        print(filename, 'updated')

    def update_files(self):
        self.update_file('brython.js')
        self.update_file('brython_stdlib.js')
        self.update_file('unicode.txt')
        self.update_file('version_info.js')

brython = Brython()
brython.update_files()
