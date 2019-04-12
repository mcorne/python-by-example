var example_names = {
    "abs": [
        "abs(123)",
        "abs(-456)",
        "abs(complex(3, 4))"
    ],
    "all": [
        "all([1, 0.1, True, (False,), {'a': False}])",
        "all([False, True])"
    ],
    "any": [
        "any([True, False])",
        "any([0, False, [], {}])"
    ],
    "ascii": [
        "ascii('Déjà vu')",
        "ascii(['liberté', 'égalité', 'fraternité'])"
    ],
    "bin": [
        "bin(3)",
        "bin(-10)"
    ],
    "bool": [
        "bool(123)",
        "bool('cat')",
        "bool('')",
        "bool([])"
    ],
    "bytearray": [
        "bytearray(10)",
        "bytearray(range(20))",
        "bytearray(b'Hi!')"
    ],
    "bytearray.fromhex": [
        "bytearray.fromhex('2Ef0 F1f2  ')"
    ],
    "bytearray.hex": [
        "bytearray(b'&#92;xf0&#92;xf1&#92;xf2').hex()"
    ],
    "bytes": [
        "bytes(10)",
        "bytes(range(20))",
        "bytes(b'Hi!')"
    ],
    "callable": [
        "callable(abs)",
        "callable(123)",
        "callable(class)",
        "callable(object)"
    ],
    "chr": [
        "chr(97)",
        "chr(8364)"
    ],
    "classmethod": [
        "class Foo: @classmethod"
    ],
    "complex": [
        "complex()",
        "complex('1+2j')",
        "complex('1 + 2j')",
        "complex(1)",
        "complex(1, 2)"
    ],
    "delattr": [
        "delattr(foo, 'bar')"
    ],
    "dict": [
        "dict(one=1, two=2, three=3)",
        "{'one': 1, 'two': 2, 'three': 3}",
        "dict(zip(['one', 'two', 'three'], [1, 2, 3]))",
        "dict([('two', 2), ('one', 1), ('three', 3)])",
        "dict({'three': 3, 'one': 1, 'two': 2})"
    ],
    "dir": [
        "dir()",
        "dir(math)",
        "dir(str)",
        "dir(object)"
    ],
    "divmod": [
        "divmod(5, 2)",
        "divmod(5.5, 2)"
    ],
    "enumerate": [
        "list(enumerate(['Spring', 'Summer', 'Fall', 'Winter']))",
        "list(enumerate(['Spring', 'Summer', 'Fall', 'Winter'], 1))"
    ],
    "eval": [
        "eval('1 + 1')"
    ],
    "filter": [
        "list(filter(None, [0, 1, False, True]))",
        "list(filter(even, [0, 1, 2, 3, 4, 5]))"
    ],
    "float": [
        "float('+1.23')",
        "float('   -12345&#92;n')",
        "float('1e-003')",
        "float('+1E6')",
        "float('-Infinity')"
    ],
    "float.as_integer_ratio": [
        "float.as_integer_ratio(10.1)",
        "float.as_integer_ratio(-0.25)"
    ],
    "float.fromhex": [
        "float.fromhex('0x3.a7p10')"
    ],
    "float.hex": [
        "float.hex(3740.0)"
    ],
    "float.is_integer": [
        "float.is_integer(123.0)",
        "float.is_integer(123.5)"
    ],
    "format": [
        "format(123, &quot;d&quot;)",
        "format(123.456, &quot;f&quot;)",
        "format(16, &quot;b&quot;)",
        "format(123456789, &quot;*&gt;+15,d&quot;)",
        "format(123.456, &quot;^-09.3f&quot;)"
    ],
    "frozenset": [
        "list(frozenset([1, 2, 3]))"
    ],
    "getattr": [
        "getattr(foo, 'bar')"
    ],
    "globals": [
        "globals()"
    ],
    "hasattr": [
        "hasattr(foo, 'bar')"
    ],
    "hash": [
        "hash('hello')"
    ],
    "hex": [
        "hex(255)",
        "hex(-42)",
        "'%#x' % 255, '%x' % 255, '%X' % 255"
    ],
    "id": [
        "id('foo')"
    ],
    "int": [
        "int(5.5)",
        "int('123')",
        "int('ffff', 16)"
    ],
    "int.bit_length": [
        "(-37).bit_length()"
    ],
    "int.from_bytes": [
        "int.from_bytes(b'&#92;x00&#92;x10', byteorder='big')",
        "int.from_bytes(b'&#92;x00&#92;x10', byteorder='little')",
        "int.from_bytes(b'&#92;xfc&#92;x00', byteorder='big', signed=True)",
        "int.from_bytes(b'&#92;xfc&#92;x00', byteorder='big', signed=False)",
        "int.from_bytes([255, 0, 0], byteorder='big')"
    ],
    "int.to_bytes": [
        "(1024).to_bytes(2, byteorder='big')",
        "(1024).to_bytes(4, byteorder='big')",
        "(-1024).to_bytes(4, byteorder='big', signed=True)"
    ],
    "isinstance": [
        "isinstance(foo, 'Foo')",
        "isinstance('abc', (str, int))"
    ],
    "issubclass": [
        "issubclass(Bar, Foo)",
        "issubclass(Mystring, (str, int))"
    ],
    "len": [
        "len('python')",
        "len([1, 2, 3])",
        "len({&quot;one&quot;: 1, &quot;two&quot;: 2})",
        "len(range(10))"
    ],
    "list": [
        "['a', 'b', 'c']",
        "list('abc')",
        "list((1, 2, 3))",
        "[x for x in range(5)]"
    ],
    "list.sort": [
        "l.sort()",
        "l.sort(reverse=True)",
        "l.sort(key=str.lower)"
    ],
    "locals": [
        "locals()"
    ],
    "map": [
        "map(sqr, [1, 2, 3, 4, 5])",
        "list(map((lambda x,y: x * y), [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))"
    ],
    "max": [
        "max(1, 3, 2, 0)",
        "max([1, 3, 2, 0])",
        "max([10, '1', '100', 90, '111', '2'], key=lambda x:int(x))",
        "max([], default='Empty!')"
    ],
    "min": [
        "min(1, 3, 2, 0)",
        "min([1, 3, 2, 0])",
        "min([10, '1', '100', 90, '111', '2'], key=lambda x:int(x))",
        "min([], default='Empty!')"
    ],
    "next": [
        "next(letters)"
    ],
    "oct": [
        "oct(8)",
        "oct(-56)"
    ],
    "open": [
        "open(__file__, 'r')",
        "open(filename, 'w')"
    ],
    "ord": [
        "ord('a')",
        "ord('€')"
    ],
    "pow": [
        "pow(10, 2)",
        "pow(10, -2)",
        "pow(9, 2, 10)"
    ],
    "print": [
        "print('Hello!')",
        "print('2000', '1', '1', sep='-')",
        "print(1, end='-')..."
    ],
    "property": [
        "property(getx, setx, delx)",
        "@property"
    ],
    "range": [
        "list(range(10))",
        "list(range(1, 11))",
        "list(range(0, 30, 5))",
        "list(range(0, 10, 3))",
        "list(range(0, -10, -1))"
    ],
    "repr": [
        "repr('foo')",
        "repr(datetime.datetime.now())",
        "repr(Class())",
        "repr(Color())"
    ],
    "reversed": [
        "list(reversed('Python'))",
        "list(reversed(('P', 'y', 't', 'h', 'o', 'n')))",
        "list(reversed(range(1, 6)))",
        "list(reversed([1, 2, 4, 3, 5]))"
    ],
    "round": [
        "round(0.5)",
        "round(-0.5)",
        "round(1.5)",
        "round(1.2345, 3)",
        "round(1.2355, 3)"
    ],
    "set": [
        "{1, 2, 3}",
        "set([1, 2, 3])",
        "{123, 'foo', (1, 2, 3)}"
    ],
    "set.add": [
        "s.add(4)"
    ],
    "set.clear": [
        "s.clear()"
    ],
    "set.copy": [
        "s.copy()"
    ],
    "set.difference": [
        "{1, 2, 3}.difference({1, 2, 3, 4, 5, 6})",
        "{1, 2, 3, 4, 5, 6}.difference({1, 2, 3})",
        "{1, 2, 3, 4, 5, 6}.difference({1, 2, 3}, {4, 10})"
    ],
    "set.difference_update": [
        "s.difference_update({1, 2, 3, 4, 5, 6})",
        "s.difference_update({1, 2, 3})",
        "s.difference_update({1, 2, 3}, {4, 10})"
    ],
    "set.discard": [
        "s.discard(3)",
        "s.discard(0)"
    ],
    "set.intersection": [
        "{1, 2, 3}.intersection({4, 5, 6})",
        "{1, 2, 3, 4, 5, 6}.intersection({1, 2, 3, 7, 8, 9})",
        "{1, 2, 3, 4, 5, 6}.intersection({1, 2, 3, 7, 8, 9}, {1, 2, 3, 10})"
    ],
    "set.intersection_update": [
        "s.intersection_update({4, 5, 6})",
        "s.intersection_update({1, 2, 3, 7, 8, 9})",
        "s.intersection_update({1, 2, 3, 7, 8, 9}, {1, 2, 3, 10})"
    ],
    "set.isdisjoint": [
        "{1, 2, 3}.isdisjoint({4, 5, 6})",
        "{1, 2, 3}.isdisjoint({1, 5, 6})"
    ],
    "set.issubset": [
        "{1, 2, 3}.issubset({4, 5, 6})",
        "{1, 2, 3}.issubset({1, 2, 3, 4, 5, 6})"
    ],
    "set.issuperset": [
        "{1, 2, 3}.issuperset({4, 5, 6})",
        "{1, 2, 3, 4, 5, 6}.issuperset({1, 2, 3})"
    ],
    "set.pop": [
        "s.pop()"
    ],
    "set.remove": [
        "s.remove(3)",
        "s.remove(0)"
    ],
    "set.symmetric_difference": [
        "{1, 2, 3, 4, 5, 6}.symmetric_difference({1, 2, 3, 7, 8, 9})",
        "{1, 2, 3}.symmetric_difference({1, 2, 3})"
    ],
    "set.symmetric_difference_update": [
        "s.symmetric_difference_update({1, 2, 3, 7, 8, 9})",
        "s.symmetric_difference_update({1, 2, 3})"
    ],
    "set.union": [
        "{1, 2, 3}.union({4, 5, 6})",
        "{1, 2, 3}.union({4, 5, 6}, {7, 8, 9})"
    ],
    "set.update": [
        "s.update({4, 5, 6}, {7, 8, 9})"
    ],
    "setattr": [
        "setattr(foo, 'bar', 123)"
    ],
    "slice": [
        "slice(1, 5, 2)",
        "slice(2, -1)"
    ],
    "sorted": [
        "sorted([5, 2, 3, 1, 4])",
        "sorted({1: 'P', 2: 'y', 3: 't', 4: 'h', 5: 'o', 6: 'n'}, reverse=True)",
        "sorted(('Z', 'a', 'P', 'u', 'B'), key=str.lower)",
        "sorted(student, key=lambda student: student[2])",
        "sorted(students, key=lambda student: student.age)"
    ],
    "str": [
        "str(123)",
        "str(Color())",
        "str(bytes, encoding='ascii', errors='ignore')"
    ],
    "str.capitalize": [
        "'hello world!'.capitalize()"
    ],
    "str.casefold": [
        "'À Bientôt Meßingenieur'.casefold()"
    ],
    "str.center": [
        "'Hello'.center(10, '*')"
    ],
    "str.count": [
        "&quot;Counting o's&quot;.count('o')",
        "&quot;Counting o's&quot;.count('o', 1, -3)"
    ],
    "str.encode": [
        "'À Bientôt Meßingenieur'.encode()",
        "'ß'.encode('ascii', 'ignore')"
    ],
    "str.endswith": [
        "'domain.com'.endswith('com')",
        "'domain.net'.endswith(('com', 'org'))"
    ],
    "str.expandtabs": [
        "'01&#92;t012&#92;t0123&#92;t01234'.expandtabs()",
        "'01&#92;t012&#92;t0123&#92;t01234'.expandtabs(4)"
    ],
    "str.find": [
        "'Looking for o'.find('o')",
        "'Looking for o'.find('o', 5, -1)"
    ],
    "str.format": [
        "Accessing arguments by position",
        "Expressing a percentage",
        "Using type-specific formatting",
        "Nesting arguments",
        "Accessing arguments by name",
        "Accessing arguments’ attributes",
        "Accessing arguments’ items",
        "Replacing %s and %r",
        "Aligning the text and specifying a width",
        "Replacing %+f, %-f, and % f and specifying a sign",
        "Replacing %x and %o and converting the value to different bases",
        "Using the comma as a thousands separator"
    ],
    "str.format_map": [
        "'{name} was born in {country}'.format_map(Default(name='Guido'))"
    ],
    "str.index": [
        "'Looking for o'.index('o')",
        "'Looking for o'.index('o', 5, -1)"
    ],
    "str.isalnum": [
        "'May 1st'.isalnum()",
        "'catch22'.isalnum()"
    ],
    "str.isalpha": [
        "'Bientôt'.isalpha()",
        "'123'.isalpha()"
    ],
    "str.isascii": [
        "'abc'.isascii()",
        "'Bientôt'.isascii()"
    ],
    "str.isdecimal": [
        "'123'.isdecimal()",
        "'abc'.isdecimal()"
    ],
    "str.isdigit": [
        "'Bientôt'.isdigit()",
        "'123'.isdigit()"
    ],
    "str.isidentifier": [
        "'Lu'.isidentifier()"
    ],
    "str.islower": [
        "'bientôt'.islower()"
    ],
    "str.isnumeric": [
        "'123'.isnumeric()"
    ],
    "str.isprintable": [
        "'Some text...'.isprintable()"
    ],
    "str.isspace": [
        "' &#92;n'.isspace()"
    ],
    "str.istitle": [
        "'Good Morning'.istitle()",
        "'good morning'.istitle()"
    ],
    "str.isupper": [
        "'BIENTÔT'.isupper()"
    ],
    "str.join": [
        "'-'.join(['2019', '03', '29'])"
    ],
    "str.ljust": [
        "'foo'.ljust(10, '*')"
    ],
    "str.lower": [
        "'BIENTÔT'.lower()"
    ],
    "str.lstrip": [
        "'   spacious   '.lstrip()",
        "'www.example.com'.lstrip('cmowz.')"
    ],
    "str.maketrans": [
        "str.maketrans({'a': 'A', 'b': 'B', 'c': 'C'})",
        "str.maketrans('abc', 'ABC')",
        "str.maketrans('abc', 'ABC', 'abd')"
    ],
    "str.partition": [
        "'The world is small'.partition(' ')"
    ],
    "str.replace": [
        "'the apple'.replace('e', 'E')"
    ],
    "str.rfind": [
        "'Looking for o'.rfind('o')",
        "'Looking for o'.rfind('o', 5, -1)"
    ],
    "str.rindex": [
        "'Looking for o'.rindex('o')",
        "'Looking for o'.rindex('o', 5, -1)"
    ],
    "str.rjust": [
        "'foo'.rjust(10, '*')"
    ],
    "str.rpartition": [
        "'The world is small'.rpartition(' ')"
    ],
    "str.rsplit": [
        "'Ten year old'.rsplit()",
        "'Ten-year-old'.rsplit('-', 1)"
    ],
    "str.rstrip": [
        "'   spacious   '.rstrip()",
        "'www.example.com'.rstrip('cmowz.')"
    ],
    "str.split": [
        "'Ten year old'.split()",
        "'Ten-year-old'.split('-', 1)",
        "'   Ten    year   old   '.split()"
    ],
    "str.splitlines": [
        "'ab c&#92;n&#92;nde fg&#92;rkl&#92;r&#92;n'.splitlines()",
        "'ab c&#92;n&#92;nde fg&#92;rkl&#92;r&#92;n'.splitlines(keepends=True)"
    ],
    "str.startswith": [
        "'fr.domain.com'.startswith('fr')",
        "'uk.domain.net'.startswith(('fr', 'uk'))"
    ],
    "str.strip": [
        "'   spacious   '.strip()",
        "'www.example.com'.strip('cmowz.')"
    ],
    "str.swapcase": [
        "'aBcDàẞ'.swapcase()"
    ],
    "str.title": [
        "'Mr smith'.title()"
    ],
    "str.translate": [
        "'car'.translate(str.maketrans({'a': 'A', 'b': 'B', 'c': 'C'}))",
        "'car'.translate(str.maketrans('abc', 'ABC'))",
        "'car'.translate(str.maketrans('abc', 'ABC', 'abd'))"
    ],
    "str.upper": [
        "'bientôt'.upper()"
    ],
    "str.zfill": [
        "'42'.zfill(5)",
        "'-42'.zfill(5)"
    ],
    "sum": [
        "sum([1.5, 2, 3, -4])",
        "sum([1, 2, 3], 10)"
    ],
    "super": [
        "super() single inheritance",
        "super() multiple inheritance",
        "super(Left, Bottom())"
    ],
    "tuple": [
        "tuple('abc')",
        "tuple([1, 2, 3])"
    ],
    "type": [
        "type('abc')",
        "type(Class())",
        "type('Car', (object,), dict(color='red', size='big'))"
    ],
    "vars": [
        "vars(Car)",
        "vars(Car())"
    ],
    "zip": [
        "list(zip('ABCDEF', '123', ['a', 'b', 'c', 'd']))",
        "zip(*(('white', 'small'), ('red', 'big')))"
    ]
};