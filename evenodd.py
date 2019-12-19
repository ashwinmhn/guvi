even=[]
odd=[]
i=0
sume=0
sumo=0

print("enter max digit input")
a=int(input())

while i<a:
 b=int(input())
 if (b%2)==0 :
   even.append(b)
   sume=sume+b
 else:
  odd.append(b)
  sumo=sumo+b
 
 i+=1


print("Even list ")
print(even)
print("even list sum is",sume)

print("odd list")
print(odd)
print("odd list sum is",sumo)