# open(__file__, 'r')
with open(__file__, 'r') as file:
    content = file.read()
print(content)
# note that files cannot be read or writen with brython that is a javascript implementation
