n = int(input("Enter the number of symbols: "))

symbols = []

print(f"Please enter {n} symbols:")
for _ in range(n):
    symbol = input()  
    symbols.append(symbol)

for i in range(n):
    count = 0
    for j in range(i):
        if symbols[j] == symbols[i]: 
            count += 1
    print(count)
