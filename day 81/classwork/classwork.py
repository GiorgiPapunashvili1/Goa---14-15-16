#8 kyu:
def to_alternating_case(string):
    return string.swapcase()


#7 kyu
def smaller(arr):
    return [sum(b < a for b in arr[i + 1:]) for i, a in enumerate(arr)]
