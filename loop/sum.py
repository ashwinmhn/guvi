#sum of natural numbers between 1 to n

i=1
a=1
sum=0

print("Enter value of n")
b=int(input())
for i in range(0,b):
 sum=sum+a
 a+=1

print(sum)