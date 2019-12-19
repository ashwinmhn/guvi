# program to print first and last  digits in a number.

print("Enter Input")
a=int(input())
list=[]




i=1

while (a>0):
 b=a%10
 a=a//10
 list.append(b)

print("First Digit: ",list[-1])
print(" ")
print("Last Digit: ",list[0]) 
 







