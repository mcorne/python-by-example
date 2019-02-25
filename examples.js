var examples = {
    abs: [
        {key: "abs(123)"          , value: "print(abs(123))"},
        {key: "abs(-123)"         , value: "print(abs(-123))"},
        {key: "abs(complex(1, 1))", value: "print(abs(complex(1, 1)))"}
    ],
    print: [
        {key: "print('Hello!')"                 , value: "print('Hello!')"},
        {key: "print('2000', '1', '1', sep='-')", value: "print('2000', '1', '1', sep='-')"},
        {key: "print(1, end='-')..."            , value: "print(1, end='-')\nprint(2, end='-')\nprint(3)"}
    ]
}