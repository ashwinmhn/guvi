# a   program to enter a number and print its reverse.




print("Enter Input")
a=int(input())
list=[]



i=1

while (a>0):
 b=a%10
 a=a//10
 list.append(b)

print(list)

 