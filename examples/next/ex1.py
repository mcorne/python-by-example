# next(letters)
letters = iter(['a', 'b', 'c'])
print(next(letters))
print(next(letters))
print(next(letters))
print(next(letters, 'The End!'))
# see issue https://github.com/brython-dev/brython/issues/1051
