#program to find power of a number using for loop.


print("Input number")
a=int(input())

print("Factors:")
for i  in range(1,a):
 if(a%i)==0:
  print(i)


