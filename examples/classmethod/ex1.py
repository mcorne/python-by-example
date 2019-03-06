# class Foo: @classmethod
class Foo:
    @classmethod
    def say_hello(cls, name):
        print('Hello', name)

Foo.say_hello('John')
