# callable(object)
class Foo:
  def __call__(self):
    print('Foo')

print(callable(Foo()))
