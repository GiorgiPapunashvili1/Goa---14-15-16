def count_special_numbers(numbers):
    special_numbers = []
    for number in numbers:
        if number < 100 and ((number % 3 == 0 and number % 6 != 0) or (number % 5 == 0 and number % 10 != 0)):
            special_numbers.append(number)
    return special_numbers

n = int(input("enter the number of integers : "))
numbers = []
for i in range(n):
    num = int(input(f"enter number {i + 1}: "))
    numbers.append(num)
special_numbers = count_special_numbers(numbers)

print(f"result: {len(special_numbers)} numbers satisfy the condition.")
print(f"these numbers: {special_numbers}")
