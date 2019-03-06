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
    "print": [
        "print('Hello!')",
        "print('2000', '1', '1', sep='-')",
        "print(1, end='-')..."
    ],
    "str.capitalize": [
        "'hello world!'.capitalize()"
    ]
};