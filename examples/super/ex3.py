# super(Left, Bottom())
class Top():
    def get_name(self):
      return 'Top'

class Left(Top):
    def get_name(self):
      return 'Left'

class Right(Top):
    def get_name(self):
      return 'Right'

class Bottom(Left, Right):
    def get_name(self):
      return 'Bottom'

print(super(Left, Bottom()).get_name())
