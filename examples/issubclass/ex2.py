# issubclass(Mystring, (str, int))
class Mystring(str):
    pass

print(issubclass(Mystring, (str, int)))
# see https://github.com/brython-dev/brython/issues/1049
