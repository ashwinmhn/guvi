# program to count number of digits in a number.

print("Enter Input")
a=int(input())
list=[]




i=1

while (a>0):
 b=a%10
 a=a//10
 list.append(b)

count=len(list) 
 


print("Total number of digits :",count)




