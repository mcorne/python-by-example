# issubclass(Bar, Foo)
class Foo:
    pass

class Bar(Foo):
    pass

print(issubclass(Bar, Foo))
print(issubclass(Foo, Bar))
