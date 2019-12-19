#a program to print multiplication table of any number

print("Enter multiplier")
a=int(input())
print("Enter multiplicand range")
b=int(input())
c=0
ans=0


for i in range(0,b):
  ans=a*c
  print(a,"x",c,":",ans)
  c+=1
