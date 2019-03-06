var example_contents = {
    "abs": [
        "print(abs(123))\n",
        "print(abs(-456))\n",
        "print(abs(complex(3, 4)))\n"
    ],
    "all": [
        "print(all([1, 0.1, True, (False,), {'a': False}]))\n",
        "print(all([False, True]))\n"
    ],
    "any": [
        "print(any([True, False]))\n",
        "print(any([0, False, [], {}]))\n"
    ],
    "ascii": [
        "print(ascii('Déjà vu'))\n",
        "print(ascii(['liberté', 'égalité', 'fraternité']))\n"
    ],
    "bin": [
        "print(bin(3))\n",
        "print(bin(-10))\n"
    ],
    "bool": [
        "print(bool(123))\n",
        "print(bool('cat'))\n",
        "print(bool(''))\n",
        "print(bool([]))\n"
    ],
    "bytearray": [
        "print(bytearray(10))\n",
        "print(bytearray(range(20)))\n",
        "print(bytearray(b'Hi!'))\n"
    ],
    "bytes": [
        "print(bytes(10))\n",
        "print(bytes(range(20)))\n",
        "print(bytes(b'Hi!'))\n"
    ],
    "callable": [
        "print(callable(abs))\n",
        "print(callable(123))\n",
        "class Foo:\n    pass\n\nprint(callable(Foo))\n",
        "class Foo:\n  def __call__(self):\n    print('Foo')\n\nprint(callable(Foo()))\n"
    ],
    "chr": [
        "print(chr(97))\n",
        "print(chr(8364))\n# see https://github.com/brython-dev/brython/issues/1047\n"
    ],
    "classmethod": [
        "class Foo:\n    @classmethod\n    def say_hello(cls, name):\n        print('Hello', name)\n\nFoo.say_hello('John')\n"
    ],
    "complex": [
        "print(complex())\n",
        "print(complex('1+2j'))\n",
        "print(complex('1 + 2j'))\n",
        "print(complex(1))\n",
        "print(complex(1, 2))\n"
    ],
    "delattr": [
        "class Foo:\n    bar = 1\n\nfoo = Foo()\ndelattr(foo, 'bar')\nprint(foo.bar)\n# see https://github.com/brython-dev/brython/issues/1048\n"
    ],
    "dict": [
        "print(dict(one=1, two=2, three=3))\n",
        "print({'one': 1, 'two': 2, 'three': 3})\n",
        "print(dict(zip(['one', 'two', 'three'], [1, 2, 3])))\n",
        "print(dict([('two', 2), ('one', 1), ('three', 3)]))\n",
        "print(dict({'three': 3, 'one': 1, 'two': 2}))\n"
    ],
    "dir": [
        "print(dir())\n",
        "import math\nprint(dir(math))\n",
        "print(dir(str))\n",
        "class Shape:\n    def __dir__(self):\n        return ['area', 'perimeter', 'location']\ns = Shape()\nprint(dir(s))\n"
    ],
    "divmod": [
        "print(divmod(5, 2))\n",
        "print(divmod(5.5, 2))\n"
    ],
    "enumerate": [
        "print(list(enumerate(['Spring', 'Summer', 'Fall', 'Winter'])))\n",
        "print(list(enumerate(['Spring', 'Summer', 'Fall', 'Winter'], 1)))\n"
    ],
    "eval": [
        "print(eval('1 + 1'))\n"
    ],
    "filter": [
        "print(list(filter(None, [0, 1, False, True])))\n",
        "def even(number):\n  return not number % 2\n\nprint(list(filter(even, [0, 1, 2, 3, 4, 5])))\n"
    ],
    "float": [
        "print(float('+1.23'))\n",
        "print(float('   -12345\\n'))\n",
        "print(float('1e-003'))\n",
        "print(float('+1E6'))\n",
        "print(float('-Infinity'))\n"
    ],
    "print": [
        "print('Hello!')\n",
        "print('2000', '1', '1', sep='-')\n",
        "print(1, end='-')\nprint(2, end='-')\nprint(3)\n"
    ],
    "str.capitalize": [
        "print('hello world!'.capitalize())\n"
    ]
};