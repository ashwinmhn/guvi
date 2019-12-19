# program to find sum of first and last digit of a number.


print("Enter Input")
a=int(input())
list=[]

sum=0
i=1

while (a>0):
 b=a%10
 a=a//10
 list.append(b)

sum=list[0]+list[-1]

print("Sum: ",sum)

 