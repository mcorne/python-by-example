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
        "class Foo:\n    bar = 123\n\nfoo = Foo()\ndelattr(foo, 'bar')\nprint(foo.bar)\n# see https://github.com/brython-dev/brython/issues/1048\n"
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
    "format": [
        "print('{0}, {1}, {2}'.format('a', 'b', 'c'))\nprint('{}, {}, {}'.format('a', 'b', 'c'))\nprint('{2}, {1}, {0}'.format('a', 'b', 'c'))\nprint('{2}, {1}, {0}'.format(*'abc'))\nprint('{0}{1}{0}'.format('abra', 'cad'))\n",
        "points = 19\ntotal = 22\nprint('Correct answers: {:.2%}'.format(points/total))\n",
        "import datetime\nd = datetime.datetime(2010, 7, 4, 12, 15, 58)\nprint('{:%Y-%m-%d %H:%M:%S}'.format(d))\n",
        "for align, text in zip('<^>', ['left', 'center', 'right']):\n    print('{0:{fill}{align}16}'.format(text, fill=align, align=align))\n\noctets = [192, 168, 0, 1]\nprint('{:02X}{:02X}{:02X}{:02X}'.format(*octets))\n\nwidth = 5\nfor num in range(5,12):\n    for base in 'dXob':\n        print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')\n    print()\n",
        "print('Coordinates: {latitude}, {longitude}'.format(latitude='37.24N', longitude='-115.81W'))\n\ncoord = {'latitude': '37.24N', 'longitude': '-115.81W'}\nprint('Coordinates: {latitude}, {longitude}'.format(**coord))\n",
        "c = 3-5j\nprint(('The complex number {0} is formed from the real part {0.real} and the imaginary part {0.imag}.').format(c))\n\nclass Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __str__(self):\n        return 'Point({self.x}, {self.y})'.format(self=self)\n\nprint(Point(4, 2))\n",
        "print('X: {0[0]};  Y: {0[1]}'.format((3, 5)))\n",
        "print(\"repr() shows quotes: {!r}; str() doesn't: {!s}\".format('test1', 'test2'))\n",
        "print('{:<30}'.format('left aligned'))\nprint('{:>30}'.format('right aligned'))\nprint('{:^30}'.format('centered'))\n# use '*' as a fill char\nprint('{:*^30}'.format('centered'))\n",
        "# show it always\nprint('{:+f}; {:+f}'.format(3.14, -3.14))\n# show a space for positive numbers\nprint('{: f}; {: f}'.format(3.14, -3.14))\n# show only the minus -- same as '{:f}; {:f}'\nprint('{:-f}; {:-f}'.format(3.14, -3.14))\n",
        "# format also supports binary numbers\nprint(\"int: {0:d};  hex: {0:x};  oct: {0:o};  bin: {0:b}\".format(42))\n# with 0x, 0o, or 0b as prefix:\nprint(\"int: {0:d};  hex: {0:#x};  oct: {0:#o};  bin: {0:#b}\".format(42))\n\n",
        "print('{:,}'.format(1234567890))\n"
    ],
    "frozenset": [
        "print(list(frozenset([1, 2, 3])))\n"
    ],
    "getattr": [
        "class Foo:\n    bar = 123\n\nfoo = Foo()\nprint(getattr(foo, 'bar'))\n"
    ],
    "globals": [
        "print(globals())\n"
    ],
    "hasattr": [
        "class Foo:\n    bar = 123\n\nfoo = Foo()\nprint(hasattr(foo, 'bar'))\nprint(hasattr(foo, 'baz'))\n"
    ],
    "hash": [
        "print(hash('hello'))\n"
    ],
    "hex": [
        "print(hex(255))\n",
        "print(hex(-42))\n",
        "print('%#x' % 255, '%x' % 255, '%X' % 255)\nprint(format(255, '#x'), format(255, 'x'), format(255, 'X'))\nprint(f'{255:#x}', f'{255:x}', f'{255:X}')\n"
    ],
    "id": [
        "print(id('foo'))\nprint(id('foo'))\nprint(id('bar'))\n"
    ],
    "int": [
        "print(int(5.5))\n",
        "print(int('123'))\n",
        "print(int('ffff', 16))\n"
    ],
    "isinstance": [
        "class Foo:\n    pass\n\nfoo = Foo()\nprint(isinstance(foo, Foo))\n",
        "print(isinstance('abc', (str, int)))\n"
    ],
    "issubclass": [
        "class Foo:\n    pass\n\nclass Bar(Foo):\n    pass\n\nprint(issubclass(Bar, Foo))\nprint(issubclass(Foo, Bar))\n",
        "class Mystring(str):\n    pass\n\nprint(issubclass(Mystring, (str, int)))\n# see https://github.com/brython-dev/brython/issues/1049\n"
    ],
    "len": [
        "print(len('python'))\n",
        "print(len([1, 2, 3]))\n",
        "print(len({\"one\": 1, \"two\": 2}))\n",
        "print(len(range(10)))\n"
    ],
    "list": [
        "print(['a', 'b', 'c'])\n",
        "print(list('abc'))\n",
        "print(list((1, 2, 3)))\n",
        "print([x for x in range(5)])\n"
    ],
    "locals": [
        "print(locals())\n"
    ],
    "map": [
        "def sqr(x):\n    return x ** 2\n\nprint(list(map(sqr, [1, 2, 3, 4, 5])))\n",
        "print(list(map((lambda x,y: x * y), [1, 2, 3, 4, 5], [1, 2, 3, 4, 5])))\n"
    ],
    "max": [
        "print(max(1, 3, 2, 0))\n",
        "print(max([1, 3, 2, 0]))\n",
        "print(max([10, '1', '100', 90, '111', '2'], key=lambda x:int(x)))\n",
        "print(max([], default='Empty!'))\n"
    ],
    "min": [
        "print(min(1, 3, 2, 0))\n",
        "print(min([1, 3, 2, 0]))\n",
        "print(min([10, '1', '100', 90, '111', '2'], key=lambda x:int(x)))\n",
        "print(min([], default='Empty!'))\n"
    ],
    "next": [
        "letters = iter(['a', 'b', 'c'])\nprint(next(letters))\nprint(next(letters))\nprint(next(letters))\nprint(next(letters, 'The End!'))\n# see https://github.com/brython-dev/brython/issues/1051\n"
    ],
    "oct": [
        "print(oct(8))\n",
        "print(oct(-56))\n"
    ],
    "open": [
        "with open(__file__, 'r') as file:\n    content = file.read()\nprint(content)\n# note that files cannot be read or writen with brython that is a javascript implementation\n",
        "import os, tempfile\nfilename = os.path.join(tempfile.gettempdir(), 'test.txt')\nwith open(filename, 'w') as file:\n    file.write('This was a write test')\nwith open(filename, 'r') as file:\n    content = file.read()\nos.remove(filename)\nprint(content)\n# note that files cannot be read or writen with brython that is a javascript implementation\n"
    ],
    "ord": [
        "print(ord('a'))\n",
        "print(ord('€'))\n"
    ],
    "pow": [
        "print(pow(10, 2))\n",
        "print(pow(10, -2))\n",
        "print(pow(9, 2, 10))\n"
    ],
    "print": [
        "print('Hello!')\n",
        "print('2000', '1', '1', sep='-')\n",
        "print(1, end='-')\nprint(2, end='-')\nprint(3)\n"
    ],
    "property": [
        "class C:\n    def __init__(self):\n        self._x = None\n\n    def getx(self):\n        return self._x\n\n    def setx(self, value):\n        self._x = value\n\n    def delx(self):\n        del self._x\n\n    x = property(getx, setx, delx, \"I'm the 'x' property.\")\n\nc = C()\nc.x = 123\nprint(c.x)\n",
        "class C:\n    def __init__(self):\n        self._x = None\n\n    @property\n    def x(self):\n        \"\"\"I'm the 'x' property.\"\"\"\n        return self._x\n\n    @x.setter\n    def x(self, value):\n        self._x = value\n\n    @x.deleter\n    def x(self):\n        del self._x\n\nc = C()\nc.x = 123\nprint(c.x)\n"
    ],
    "range": [
        "print(list(range(10)))\n",
        "print(list(range(1, 11)))\n",
        "print(list(range(0, 30, 5)))\n",
        "print(list(range(0, 10, 3)))\n",
        "print(list(range(0, -10, -1)))\n"
    ],
    "repr": [
        "print(repr('foo'))\n",
        "import datetime\nprint(repr(datetime.datetime.now()))\n",
        "class Class:\n    pass\n\nprint(repr(Class()))\n",
        "class Color:\n    color = 'orange'\n    def __repr__(self):\n        return repr(Color.color)\n\nprint(repr(Color()))\n"
    ],
    "reversed": [
        "print(list(reversed('Python')))\n",
        "print(list(reversed(('P', 'y', 't', 'h', 'o', 'n'))))\n",
        "print(list(reversed(range(1, 6))))\n",
        "print(list(reversed([1, 2, 4, 3, 5])))\n"
    ],
    "str.capitalize": [
        "print('hello world!'.capitalize())\n"
    ]
};