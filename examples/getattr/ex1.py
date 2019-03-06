# getattr(foo, 'bar')
class Foo:
    bar = 123

foo = Foo()
print(getattr(foo, 'bar'))
