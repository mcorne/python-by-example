# setattr(foo, 'bar', 123)
class Foo:
    bar = 0

foo = Foo()
setattr(foo, 'bar', 123)
print(foo.bar)
foo.bar = 456
print(foo.bar)
