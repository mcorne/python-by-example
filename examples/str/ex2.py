# str(Color())
class Color:
    color = 'orange'
    def __str__(self):
        return Color.color

print(str(Color()))
