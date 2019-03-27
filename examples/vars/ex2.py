# vars(Car())
class Car():
    def __init__(self, color='red', size = 'small'):
        self.color = color
        self.size = size

print(vars(Car()))
