# delattr(foo, 'bar')
class Foo:
    bar = 1

foo = Foo()
delattr(foo, 'bar')
print(foo.bar)
# see https://github.com/brython-dev/brython/issues/1048
