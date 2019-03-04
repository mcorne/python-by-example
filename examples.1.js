var examples = {
    abs: [
        {short: "abs(123)"                        , full: "print(abs(123))"},
        {short: "abs(-456)"                       , full: "print(abs(-456))"},
        {short: "abs(complex(3, 4))"              , full: "print(abs(complex(3, 4)))"}
    ],
    dir: [
        {short: "dir()"                           , full: "print(dir())"},
        {short: "dir(math)"                       , full: "import math\nprint(dir(math))"},
        {short: "dir(str)"                        , full: "import math\nprint(dir(str))"},
        {short: "dir(object)"                     , full:
"class Shape:\n\
    def __dir__(self):\n\
        return ['area', 'perimeter', 'location']\n\
s = Shape()\n\
print(dir(s))"
        }
    ],
    print: [
        {short: "print('Hello!')"                 , full: "print('Hello!')"},
        {short: "print('2000', '1', '1', sep='-')", full: "print('2000', '1', '1', sep='-')"},
        {short: "print(1, end='-')..."            , full: "print(1, end='-')\nprint(2, end='-')\nprint(3)"}
    ],
    "str.capitalize": [
        {short: "'hello world!'.capitalize()"     , full: "print('hello world!'.capitalize())"}
    ]
}
