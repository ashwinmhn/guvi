#program to find power of a number using for loop.


print("Input number")
a=int(input())
print("Input exponent")
b=int(input())

power=a

for i  in range(0,b-1):
 power*=a

print("Output")
print(power) 
 
