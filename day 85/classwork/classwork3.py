arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in range(10):
    num = int(input())
    arr.append(num)
for i in range(len(arr)):
    arr[i] = arr[i] * 2
print(arr)