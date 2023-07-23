import math

# def sum_multiples(num):
#     sum = 0
#     for i in range(1,num):
#         if i % 3 == 0 or i % 5 == 0:
#             sum += i
#     return sum

# print(sum_multiples(1000))

# def even_fib_numbers():
#     sum = 0
#     fibs = [1,2]
#     newTerm = fibs[-1] + fibs[-2]
#     while newTerm < 4000000:
#         newTerm = fibs[-1] + fibs[-2]
#         fibs.append(newTerm)
#     for num in fibs:
#         if num % 2 == 0:
#             sum += num
#     return sum

# print(even_fib_numbers())

# What is the largest prime factor of the number 600851475143

def largest_prime_factor(num):
    if num < 2:
        return None
    while num % 2 == 0:
        num //= 2
    largest_factor = 3
    for i in range(3, int(math.sqrt(num)) + 1, 2):
        while num % i == 0:
            num //= i
            largest_factor = i

    if num > 2:
        largest_factor = num

    return largest_factor

print(largest_prime_factor(600851475143))