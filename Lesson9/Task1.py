
# Завдання 1: Умови та масиви
#
# Вхід: [4, 4, 8, 3, 3, 3, 2, 4, 4]
#
# Вивести кожен елемент масиву.
# Вивести перші 3 елементи масиву
# Вивести суму всіх елементів
# Вивести суму всіх елементів окрім елемента що = 4;

myList = [4, 4, 8, 3, 3, 3, 2, 4, 4]

print(*myList)

# for numbers in myList:
#     print(numbers)

for i in range(3):
    print(f'the {i+1} element is {myList[i]}')

print(f"The sum of array is {sum(myList)}")

sum1 = 0
for i in myList:
    if i != 4:
        sum1 += i

print(f"The sum of array with elements != 4 is {sum1} ")
