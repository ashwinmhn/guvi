list=[]
print("enter maximun digits in list")

a= int(input())

for i in range(0,a):
 b= int(input())
 list.append(b)
 
#prime number
 
 if b > 1:  
    for i in range(2,b):  
        if (b % i) == 0:  
            print(b,"is not a prime number")  
              
            break  
    else:  
        print(b,"is a prime number")  
         
 else:  
   print(b,"is not a prime number")  
 
print (list)
 
 
