class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

def group_students(students):
    groups = {}
    
    for student in students:
        age_group = student.age // 10 * 10
        if age_group not in groups:
            groups[age_group] = []
        groups[age_group].append(student.name)
    
    return groups

students = [
    Student("John", 15),
    Student("Mary", 12),
    Student("Luke", 17),
    Student("Anna", 14),
    Student("Jake", 19)
]

grouped_students = group_students(students)

for age_group, names in grouped_students.items():
    print(f"Age group {age_group}-{age_group+9}: {', '.join(names)}")
