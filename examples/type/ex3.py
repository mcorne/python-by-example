# type('Car', (object,), dict(color='red', size='big'))
Class = type('Car', (object,), dict(color='red', size='big'))
car = Class()
print(car.color)
print(car.size)