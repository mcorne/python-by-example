# repr(Color())
class Color:
    color = 'orange'
    def __repr__(self):
        return repr(Color.color)

print(repr(Color()))
