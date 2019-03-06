# list(filter(even, [0, 1, 2, 3, 4, 5]))
def even(number):
  return not number % 2

print(list(filter(even, [0, 1, 2, 3, 4, 5])))
