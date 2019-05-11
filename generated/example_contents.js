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
    "bytearray.fromhex": [
        "print(bytearray.fromhex('2Ef0 F1f2  '))\n# see issue https://github.com/brython-dev/brython/issues/1090\n"
    ],
    "bytearray.hex": [
        "print(bytearray(b'\\xf0\\xf1\\xf2').hex())\n# see issue https://github.com/brython-dev/brython/issues/1091\n"
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
        "print(chr(8364))\n# see issue https://github.com/brython-dev/brython/issues/1047\n"
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
        "class Foo:\n    bar = 123\n\nfoo = Foo()\ndelattr(foo, 'bar')\nprint(foo.bar)\n# see issue https://github.com/brython-dev/brython/issues/1048\n"
    ],
    "dict": [
        "print(dict(one=1, two=2, three=3))\n",
        "print({'one': 1, 'two': 2, 'three': 3})\n",
        "print(dict(zip(['one', 'two', 'three'], [1, 2, 3])))\n",
        "print(dict([('two', 2), ('one', 1), ('three', 3)]))\n",
        "print(dict({'three': 3, 'one': 1, 'two': 2}))\n"
    ],
    "dict.clear": [
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.clear())\n"
    ],
    "dict.copy": [
        "print({'one': 1, 'two': 2, 'three': 3}.copy())\n"
    ],
    "dict.fromkeys": [
        "print(dict.fromkeys(['one', 'two', 'three'], 'x'))\n"
    ],
    "dict.get": [
        "print({'one': 1, 'two': 2, 'three': 3}.get('two'))\n",
        "print({'one': 1, 'two': 2, 'three': 3}.get('four', 4))\n"
    ],
    "dict.items": [
        "print({'one': 1, 'two': 2, 'three': 3}.items())\n"
    ],
    "dict.keys": [
        "print({'one': 1, 'two': 2, 'three': 3}.keys())\n"
    ],
    "dict.pop": [
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.pop('two'))\nprint(d)\n",
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.pop('four', 4))\nprint(d)\n"
    ],
    "dict.popitem": [
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.popitem())\nprint(d)\nprint(d.popitem())\nprint(d)\n",
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.pop('four', 4))\nprint(d)\n"
    ],
    "dict.setdefault": [
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.setdefault('two'))\nprint(d)\n",
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.setdefault('four', 4))\nprint(d)\n"
    ],
    "dict.update": [
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.update({'two': 'II', 'four': 4}))\nprint(d)\n",
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.update(two='II', four=4))\nprint(d)\n",
        "d = {'one': 1, 'two': 2, 'three': 3}\nprint(d.update((['two', 'II'], ['four', 4])))\nprint(d)\n"
    ],
    "dict.values": [
        "print({'one': 1, 'two': 2, 'three': 3}.values())\n"
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
    "float.as_integer_ratio": [
        "print(float.as_integer_ratio(10.1))\n",
        "print(float.as_integer_ratio(-0.25))\n"
    ],
    "float.fromhex": [
        "print(float.fromhex('0x3.a7p10'))\n"
    ],
    "float.hex": [
        "print(float.hex(3740.0))\n"
    ],
    "float.is_integer": [
        "print(float.is_integer(123.0))\n",
        "print(float.is_integer(123.5))\n"
    ],
    "format": [
        "print(format(123, \"d\"))\n",
        "print(format(123.456, \"f\"))\n",
        "print(format(16, \"b\"))\n",
        "print(format(123456789, \"*>+15,d\"))\n",
        "print(format(123.456, \"^-09.3f\"))\n# see issue https://github.com/brython-dev/brython/issues/1075\n"
    ],
    "frozenset": [
        "print(list(frozenset([1, 2, 3])))\n"
    ],
    "getattr": [
        "class Foo:\n    bar = 123\n\nfoo = Foo()\nprint(getattr(foo, 'bar'))\nprint(foo.bar)\n"
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
    "int.bit_length": [
        "print((-37).bit_length())\n"
    ],
    "int.from_bytes": [
        "print(int.from_bytes(b'\\x00\\x10', byteorder='big'))\n",
        "print(int.from_bytes(b'\\x00\\x10', byteorder='little'))\n",
        "print(int.from_bytes(b'\\xfc\\x00', byteorder='big', signed=True))\n",
        "print(int.from_bytes(b'\\xfc\\x00', byteorder='big', signed=False))\n",
        "print(int.from_bytes([255, 0, 0], byteorder='big'))\n"
    ],
    "int.to_bytes": [
        "print((1024).to_bytes(2, byteorder='big'))\n",
        "print((1024).to_bytes(4, byteorder='big'))\n# see issue https://github.com/brython-dev/brython/issues/1092\n",
        "print((-1024).to_bytes(4, byteorder='big', signed=True))\n"
    ],
    "isinstance": [
        "class Foo:\n    pass\n\nfoo = Foo()\nprint(isinstance(foo, Foo))\n",
        "print(isinstance('abc', (str, int)))\n"
    ],
    "issubclass": [
        "class Foo:\n    pass\n\nclass Bar(Foo):\n    pass\n\nprint(issubclass(Bar, Foo))\nprint(issubclass(Foo, Bar))\n",
        "class Mystring(str):\n    pass\n\nprint(issubclass(Mystring, (str, int)))\n# see issue https://github.com/brython-dev/brython/issues/1049\n"
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
    "list.sort": [
        "l = [5, 2, 3, 1, 4]\nl.sort()\nprint(l)\n",
        "l = [5, 2, 3, 1, 4]\nl.sort(reverse=True)\nprint(l)\n",
        "l = ['Z', 'a', 'P', 'u', 'B']\nl.sort(key=str.lower)\nprint(l)\n"
    ],
    "locals": [
        "print(locals())\n"
    ],
    "map": [
        "def sqr(x):\n    return x ** 2\n\nprint(list(map(sqr, [1, 2, 3, 4, 5])))\n",
        "print(list(map((lambda x,y: x * y), [1, 2, 3, 4, 5], [1, 2, 3, 4, 5])))\n"
    ],
    "math.ceil": [
        "import math\nprint(math.ceil(1.2))\n"
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
        "letters = iter(['a', 'b', 'c'])\nprint(next(letters))\nprint(next(letters))\nprint(next(letters))\nprint(next(letters, 'The End!'))\n# see issue https://github.com/brython-dev/brython/issues/1051\n"
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
    "round": [
        "print(round(0.5))\n",
        "print(round(-0.5))\n",
        "print(round(1.5))\n",
        "print(round(1.2345, 3))\n",
        "print(round(1.2355, 3))\n"
    ],
    "set": [
        "print({1, 2, 3})\n",
        "print(set([1, 2, 3]))\n",
        "print({123, 'foo', (1, 2, 3)})\n"
    ],
    "set.add": [
        "s = {1, 2, 3}\ns.add(4)\nprint(s)\n"
    ],
    "set.clear": [
        "s = {1, 2, 3}\ns.clear()\nprint(s)\n"
    ],
    "set.copy": [
        "s = {1, 2, 3}\ns.copy()\nprint(s)\n"
    ],
    "set.difference": [
        "print({1, 2, 3}.difference({1, 2, 3, 4, 5, 6}))\nprint({1, 2, 3} - {1, 2, 3, 4, 5, 6})\n",
        "print({1, 2, 3, 4, 5, 6}.difference({1, 2, 3}))\nprint({1, 2, 3, 4, 5, 6} - {1, 2, 3})\n",
        "print({1, 2, 3, 4, 5, 6}.difference({1, 2, 3}, {4, 10}))\nprint({1, 2, 3, 4, 5, 6} - {1, 2, 3} - {4, 10})\n"
    ],
    "set.difference_update": [
        "s = {1, 2, 3}\ns.difference_update({1, 2, 3, 4, 5, 6})\nprint(s)\n",
        "s = {1, 2, 3, 4, 5, 6}\ns.difference_update({1, 2, 3})\nprint(s)\n",
        "s = {1, 2, 3, 4, 5, 6}\ns.difference_update({1, 2, 3}, {4, 10})\nprint(s)\n"
    ],
    "set.discard": [
        "s = {1, 2, 3}\ns.discard(3)\nprint(s)\n",
        "s = {1, 2, 3}\ns.discard(0)\nprint(s)\n"
    ],
    "set.intersection": [
        "print({1, 2, 3}.intersection({4, 5, 6}))\nprint({1, 2, 3} & {4, 5, 6})\n",
        "print({1, 2, 3, 4, 5, 6}.intersection({1, 2, 3, 7, 8, 9}))\nprint({1, 2, 3, 4, 5, 6} & {1, 2, 3, 7, 8, 9})\n",
        "print({1, 2, 3, 4, 5, 6}.intersection({1, 2, 3, 7, 8, 9}, {1, 2, 3, 10}))\nprint({1, 2, 3, 4, 5, 6} & {1, 2, 3, 7, 8, 9} & {1, 2, 3, 10})\n"
    ],
    "set.intersection_update": [
        "s = {1, 2, 3}\ns.intersection_update({4, 5, 6})\nprint(s)\n",
        "s = {1, 2, 3, 4, 5, 6}\ns.intersection_update({1, 2, 3, 7, 8, 9})\nprint(s)\n",
        "s = {1, 2, 3, 4, 5, 6}\ns.intersection_update({1, 2, 3, 7, 8, 9}, {1, 2, 3, 10})\nprint(s)\n"
    ],
    "set.isdisjoint": [
        "print({1, 2, 3}.isdisjoint({4, 5, 6}))\n",
        "print({1, 2, 3}.isdisjoint({1, 5, 6}))\n"
    ],
    "set.issubset": [
        "print({1, 2, 3}.issubset({4, 5, 6}))\nprint({1, 2, 3} <= {4, 5, 6})\n",
        "print({1, 2, 3}.issubset({1, 2, 3, 4, 5, 6}))\nprint({1, 2, 3} <= {1, 2, 3, 4, 5, 6})\n"
    ],
    "set.issuperset": [
        "print({1, 2, 3}.issuperset({4, 5, 6}))\nprint({1, 2, 3} >= {4, 5, 6})\n",
        "print({1, 2, 3, 4, 5, 6}.issuperset({1, 2, 3}))\nprint({1, 2, 3, 4, 5, 6} >= {1, 2, 3})\n"
    ],
    "set.pop": [
        "s = {1, 2, 3}\nprint(s.pop())\nprint(s)\n"
    ],
    "set.remove": [
        "s = {1, 2, 3}\ns.remove(3)\nprint(s)\n",
        "s = {1, 2, 3}\ns.remove(0)\nprint(s)\n# bug as it should return a KeyError exception !!!\n"
    ],
    "set.symmetric_difference": [
        "print({1, 2, 3, 4, 5, 6}.symmetric_difference({1, 2, 3, 7, 8, 9}))\nprint({1, 2, 3, 4, 5, 6} ^ {1, 2, 3, 7, 8, 9})\n",
        "print({1, 2, 3}.symmetric_difference({1, 2, 3}))\nprint({1, 2, 3} ^ {1, 2, 3})\n"
    ],
    "set.symmetric_difference_update": [
        "s = {1, 2, 3, 4, 5, 6}\ns.symmetric_difference_update({1, 2, 3, 7, 8, 9})\nprint(s)\n",
        "s = {1, 2, 3}\ns.symmetric_difference_update({1, 2, 3})\nprint(s)\n"
    ],
    "set.union": [
        "print({1, 2, 3}.union({4, 5, 6}))\nprint({1, 2, 3} | {4, 5, 6})\n",
        "print({1, 2, 3}.union({4, 5, 6}, {7, 8, 9}))\nprint({1, 2, 3} | {4, 5, 6} | {7, 8, 9})\n"
    ],
    "set.update": [
        "s = {1, 2, 3}\ns.update({4, 5, 6}, {7, 8, 9})\nprint(s)\n"
    ],
    "setattr": [
        "class Foo:\n    bar = 0\n\nfoo = Foo()\nsetattr(foo, 'bar', 123)\nprint(foo.bar)\nfoo.bar = 456\nprint(foo.bar)\n"
    ],
    "slice": [
        "s = slice(1, 5, 2)\nprint(s)\nstring = 'abcdef'\nprint(string[s])\nprint(string[1:5:2])\n",
        "s = slice(2, -1)\nprint(s)\nl = ['a', 'b', 'c', 'd', 'e', 'f']\nprint(l[s])\nprint(l[2:-1])\n"
    ],
    "sorted": [
        "print(sorted([5, 2, 3, 1, 4]))\n",
        "print(sorted({1: 'P', 2: 'y', 3: 't', 4: 'h', 5: 'o', 6: 'n'}, reverse=True))\n",
        "print(sorted(('Z', 'a', 'P', 'u', 'B'), key=str.lower))\n",
        "students = [\n    ('john', 'A', 15),\n    ('jane', 'B', 12),\n    ('dave', 'B', 10),\n]\n\nprint(sorted(students, key=lambda student: student[2])) # sort by age\n\nfrom operator import itemgetter\nprint(sorted(students, key=itemgetter(2))) # sort by age\nprint(sorted(students, key=itemgetter(1,2))) # sort by grade then by age\n",
        "class Student:\n    def __init__(self, name, grade, age):\n        self.name = name\n        self.grade = grade\n        self.age = age\n    def __repr__(self):\n        return repr((self.name, self.grade, self.age))\n\nstudents = [\n    Student('john', 'A', 15),\n    Student('jane', 'B', 12),\n    Student('dave', 'B', 10),\n]\n\nprint(sorted(students, key=lambda student: student.age)) # sort by age\n\nfrom operator import attrgetter\nprint(sorted(students, key=attrgetter('age'))) # sort by age\nprint(sorted(students, key=attrgetter('grade', 'age'))) # sort by grade then by age\n"
    ],
    "str": [
        "print(str(123))\n",
        "class Color:\n    color = 'orange'\n    def __str__(self):\n        return Color.color\n\nprint(str(Color()))\n",
        "bytes = bytes('pythôn', encoding='utf-8')\nprint(str(bytes, encoding='ascii', errors='ignore'))\n# see issue https://github.com/brython-dev/brython/issues/1060\n"
    ],
    "str.capitalize": [
        "print('hello world!'.capitalize())\n"
    ],
    "str.casefold": [
        "print('À Bientôt Meßingenieur'.casefold())\n"
    ],
    "str.center": [
        "print('Hello'.center(10, '*'))\n"
    ],
    "str.count": [
        "print(\"Counting o's\".count('o'))\n",
        "print(\"Counting o's\".count('o', 1, -3))\n"
    ],
    "str.encode": [
        "print('À Bientôt Meßingenieur'.encode())\n",
        "print('ß'.encode('ascii', 'ignore'))\n# see issue https://github.com/brython-dev/brython/issues/1071\n"
    ],
    "str.endswith": [
        "print('domain.com'.endswith('com'))\n",
        "print('domain.net'.endswith(('com', 'org')))\n"
    ],
    "str.expandtabs": [
        "print('01\\t012\\t0123\\t01234'.expandtabs())\n",
        "print('01\\t012\\t0123\\t01234'.expandtabs(4))\n"
    ],
    "str.find": [
        "print('Looking for o'.find('o'))\n",
        "print('Looking for o'.find('o', 5, -1))\n"
    ],
    "str.format": [
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
    "str.format_map": [
        "class Default(dict):\n    def __missing__(self, key):\n        return key\n\nprint('{name} was born in {country}'.format_map(Default(name='Guido')))\n"
    ],
    "str.index": [
        "print('Looking for o'.index('o'))\n",
        "print('Looking for o'.index('o', 5, -1))\n"
    ],
    "str.isalnum": [
        "print('May 1st'.isalnum())\n",
        "print('catch22'.isalnum())\n"
    ],
    "str.isalpha": [
        "print('Bientôt'.isalpha())\n",
        "print('123'.isalpha())\n"
    ],
    "str.isascii": [
        "print('abc'.isascii())\n# see issue https://github.com/brython-dev/brython/issues/1076\n",
        "print('Bientôt'.isascii())\n# see issue https://github.com/brython-dev/brython/issues/1076\n"
    ],
    "str.isdecimal": [
        "print('123'.isdecimal())\n",
        "print('abc'.isdecimal())\n"
    ],
    "str.isdigit": [
        "print('Bientôt'.isdigit())\n",
        "print('123'.isdigit())\n"
    ],
    "str.isidentifier": [
        "print('Lu'.isidentifier())\n"
    ],
    "str.islower": [
        "print('bientôt'.islower())\n"
    ],
    "str.isnumeric": [
        "print('123'.isnumeric())\n"
    ],
    "str.isprintable": [
        "print('Some text...'.isprintable())\n"
    ],
    "str.isspace": [
        "print(' \\n'.isspace())\n"
    ],
    "str.istitle": [
        "print('Good Morning'.istitle())\n",
        "print('good morning'.istitle())\n"
    ],
    "str.isupper": [
        "print('BIENTÔT'.isupper())\n"
    ],
    "str.join": [
        "print('-'.join(['2019', '03', '29']))\n"
    ],
    "str.ljust": [
        "print('foo'.ljust(10, '*'))\n"
    ],
    "str.lower": [
        "print('BIENTÔT'.lower())\n"
    ],
    "str.lstrip": [
        "print('   spacious   '.lstrip())\n",
        "print('www.example.com'.lstrip('cmowz.'))\n"
    ],
    "str.maketrans": [
        "print(str.maketrans({'a': 'A', 'b': 'B', 'c': 'C'}))\n# see issue https://github.com/brython-dev/brython/issues/1077\n",
        "print(str.maketrans('abc', 'ABC'))\n",
        "print(str.maketrans('abc', 'ABC', 'abd'))\n# see issue https://github.com/brython-dev/brython/issues/1078\n"
    ],
    "str.partition": [
        "print('The world is small'.partition(' '))\n"
    ],
    "str.replace": [
        "print('the apple'.replace('e', 'E'))\n"
    ],
    "str.rfind": [
        "print('Looking for o'.rfind('o'))\n",
        "print('Looking for o'.rfind('o', 5, -1))\n"
    ],
    "str.rindex": [
        "print('Looking for o'.rindex('o'))\n",
        "print('Looking for o'.rindex('o', 5, -1))\n"
    ],
    "str.rjust": [
        "print('foo'.rjust(10, '*'))\n"
    ],
    "str.rpartition": [
        "print('The world is small'.rpartition(' '))\n"
    ],
    "str.rsplit": [
        "print('Ten year old'.rsplit())\n",
        "print('Ten-year-old'.rsplit('-', 1))\n"
    ],
    "str.rstrip": [
        "print('   spacious   '.rstrip())\n",
        "print('www.example.com'.rstrip('cmowz.'))\n"
    ],
    "str.split": [
        "print('Ten year old'.split())\n",
        "print('Ten-year-old'.split('-', 1))\n",
        "print('   Ten    year   old   '.split())\n"
    ],
    "str.splitlines": [
        "print('ab c\\n\\nde fg\\rkl\\r\\n'.splitlines())\n",
        "print('ab c\\n\\nde fg\\rkl\\r\\n'.splitlines(keepends=True))\n"
    ],
    "str.startswith": [
        "print('fr.domain.com'.startswith('fr'))\n",
        "print('uk.domain.net'.startswith(('fr', 'uk')))\n"
    ],
    "str.strip": [
        "print('   spacious   '.strip())\n",
        "print('www.example.com'.strip('cmowz.'))\n"
    ],
    "str.swapcase": [
        "print('aBcDàẞ'.swapcase())\n"
    ],
    "str.title": [
        "print('Mr smith'.title())\n"
    ],
    "str.translate": [
        "print('car'.translate(str.maketrans({'a': 'A', 'b': 'B', 'c': 'C'})))\n",
        "print('car'.translate(str.maketrans('abc', 'ABC')))\n",
        "print('car'.translate(str.maketrans('abc', 'ABC', 'abd')))\n"
    ],
    "str.upper": [
        "print('bientôt'.upper())\n"
    ],
    "str.zfill": [
        "print('42'.zfill(5))\n",
        "print('-42'.zfill(5))\n"
    ],
    "string.capwords": [
        "import string\nprint(string.capwords('hello world!'))\n"
    ],
    "sum": [
        "print(sum([1.5, 2, 3, -4]))\n",
        "print(sum([1, 2, 3], 10))\n"
    ],
    "super": [
        "class Animal:\n  def __init__(self, name):\n    print(name, 'is an animal.')\n\nclass Cat(Animal):\n  def __init__(self, name):\n    super().__init__(name)\n    # Animal.__init__(self, name)\n    print(name, 'is a cat.')\n\nfelix = Cat('Felix')\n",
        "class Animal:\n  def __init__(self, name):\n    print(name, 'is an animal.')\n\nclass Cat(Animal):\n  def __init__(self, name):\n    super().__init__(name)\n    print(name, 'is a cat.')\n\nclass Fish(Animal):\n  def __init__(self, name):\n    super().__init__(name)\n    print(name, 'likes fish.')\n\nclass BlackCat(Cat, Fish):\n  def __init__(self, name):\n    super().__init__(name)\n\nfelix = BlackCat('Felix')\n",
        "class Top():\n    def get_name(self):\n      return 'Top'\n\nclass Left(Top):\n    def get_name(self):\n      return 'Left'\n\nclass Right(Top):\n    def get_name(self):\n      return 'Right'\n\nclass Bottom(Left, Right):\n    def get_name(self):\n      return 'Bottom'\n\nprint(super(Left, Bottom()).get_name())\n"
    ],
    "tuple": [
        "print(tuple('abc'))\n",
        "print(tuple([1, 2, 3]))\n"
    ],
    "type": [
        "print(type('abc'))\n",
        "class Class():\n    pass\n\nprint(type(Class()))\n",
        "Class = type('Car', (object,), dict(color='red', size='big'))\ncar = Class()\nprint(car.color)\nprint(car.size)\n"
    ],
    "vars": [
        "class Car():\n    color = 'black'\n    size = 'big'\n\nprint(vars(Car))\n",
        "class Car():\n    def __init__(self, color='red', size = 'small'):\n        self.color = color\n        self.size = size\n\nprint(vars(Car()))\n"
    ],
    "zip": [
        "print(list(zip('ABCDEF', '123', ['a', 'b', 'c', 'd'])))\n",
        "colors, sizes = zip(*(('white', 'small'), ('red', 'big')))\nprint(colors)\nprint(sizes)\n"
    ]
};