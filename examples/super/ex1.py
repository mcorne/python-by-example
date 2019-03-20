# super() single inheritance
class Animal:
  def __init__(self, name):
    print(name, 'is an animal.')

class Cat(Animal):
  def __init__(self, name):
    super().__init__(name)
    # Animal.__init__(self, name)
    print(name, 'is a cat.')

felix = Cat('Felix')
