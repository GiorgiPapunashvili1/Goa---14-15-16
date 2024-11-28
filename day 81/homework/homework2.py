def count_odd_digits(number):
    number_str = str(abs(number))
    odd_count = 0
    
    for digit in number_str:
        if int(digit) % 2 != 0: 
            odd_count += 1
    return odd_count


user_input = int(input("input an integer: "))


print(f"{count_odd_digits(user_input)}")