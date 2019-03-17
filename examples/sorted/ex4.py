# sorted(student, key=lambda student: student[2])
students = [
    ('john', 'A', 15),
    ('jane', 'B', 12),
    ('dave', 'B', 10),
]

print(sorted(students, key=lambda student: student[2])) # sort by age

from operator import itemgetter
print(sorted(students, key=itemgetter(2))) # sort by age
print(sorted(students, key=itemgetter(1,2))) # sort by grade then by age
