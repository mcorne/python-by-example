# sorted(students, key=lambda student: student.age)
class Student:
    def __init__(self, name, grade, age):
        self.name = name
        self.grade = grade
        self.age = age
    def __repr__(self):
        return repr((self.name, self.grade, self.age))

students = [
    Student('john', 'A', 15),
    Student('jane', 'B', 12),
    Student('dave', 'B', 10),
]

print(sorted(students, key=lambda student: student.age)) # sort by age

from operator import attrgetter
print(sorted(students, key=attrgetter('age'))) # sort by age
print(sorted(students, key=attrgetter('grade', 'age'))) # sort by grade then by age
