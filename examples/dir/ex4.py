# dir(object)
class Shape:
    def __dir__(self):
        return ['area', 'perimeter', 'location']
s = Shape()
print(dir(s))
