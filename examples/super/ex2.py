# super() multiple inheritance
class Animal:
  def __init__(self, name):
    print(name, 'is an animal.')

class Cat(Animal):
  def __init__(self, name):
    super().__init__(name)
    print(name, 'is a cat.')

class Fish(Animal):
  def __init__(self, name):
    super().__init__(name)
    print(name, 'likes fish.')

class BlackCat(Cat, Fish):
  def __init__(self, name):
    super().__init__(name)

felix = BlackCat('Felix')
