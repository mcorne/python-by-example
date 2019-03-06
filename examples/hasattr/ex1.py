# hasattr(foo, 'bar')
class Foo:
    bar = 123

foo = Foo()
print(hasattr(foo, 'bar'))
print(hasattr(foo, 'baz'))
