# a  program to calculate product of digits of a number.



print("Enter Input")
a=int(input())
list=[]
list2=[]

product=1
i=1

while (a>0):
 b=a%10
 a=a//10
 list.append(b)



c=len(list)

d=c-1

for i in range (0,c):
 list2.append(list[d])
 product*=list[d]
 d-=1

print("product : ",product)

 