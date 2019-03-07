# open(filename, 'w')
import os, tempfile
filename = os.path.join(tempfile.gettempdir(), 'test.txt')
with open(filename, 'w') as file:
    file.write('This was a write test')
with open(filename, 'r') as file:
    content = file.read()
os.remove(filename)
print(content)
# note that files cannot be read or writen with brython that is a javascript implementation
