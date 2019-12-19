
#functions
def add(a,c):
 output=a+c
 print("Answer :",output)

def sub(a,c):
 output=a-c
 print("Answer :",output)

def div(a,c):
 output=a/c
 print("Answer :",output)

def mul(a,c):
 output=a*c
 print("Answer :",output)

def modulo(a,c):
 output=a%c
 print("Answer :",output)


print("-----------------Calculator--------------")
print(" +    Add")
print("                              ")
print(" -    Subtract")
print("                              ")
print(" /    Divison")
print("                              ")
print(" %    Modulo")
print("                              ")
print(" X    Multiplication")
print("-----------------------------------------")
print("                                 ")
print("Enter Input")
a,b,c=input().split()
output=0
i=1




while i<5:

 
 a=int(a)
 c=int(c)




 if(b=="+"):
 	add(a,c)


 if(b=="-"):
   sub(a,c)

 if(b=="/"):
 	div(a,c)

 if(b=="%"):
   modulo(a,c)

 if(b=="X") or (b=="x"):
   mul(a,c)  	
 
 print("To Continue press 1")
 print("To exit press 0")
 x=int(input())
 if(x==0):
  i=6

 else:
  Continue 



  




 












