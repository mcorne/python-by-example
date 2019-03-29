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
        "set([1, 2, 3])",
        "{1, 2, 3}",
        "{123, 'foo', (1, 2, 3)}"
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
        "'xyz'.maketrans({'a': 'A', 'b': 'B', 'c': 'C'})",
        "'xyz'.maketrans('abc', 'ABC')",
        "'xyz'.maketrans('abc', 'ABC', 'abd')"
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