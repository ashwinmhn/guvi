# a program to calculate sum of digits of a number


print("Enter Input")
a=int(input())
list=[]
list2=[]

sum=0
i=1

while (a>0):
 b=a%10
 a=a//10
 list.append(b)



c=len(list)

d=c-1

for i in range (0,c):
 list2.append(list[d])
 sum+=list[d]
 d-=1

print("sum : ",sum)

 