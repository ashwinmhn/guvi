# Unit Calculation
#First 150 = Rs4/unit
#150-300 = Rs 8/unit
#Above 300 = Rs 12/unit
#Above 1000=Rs 20/unit

list=[]
s=0

for i in range (0,5):
   print("Enter number of units")
   a=int(input())
   list.append(a)

   #unit calculation
   if (a>0) and (a<150) or (a==150) :
     s=a*4
     print("Total cost is Rs", s )
   if (a>150) and (a<300) or (a==300):
     s=a*8
     print("Total cost is Rs", s )
   if (a>300) and (a<1000) or (a==1000):
     s=a*12
     print("Total cost is Rs", s )
   if(a>1000) :
     s=a*20
     print("Total cost is Rs", s )
   elif(a<0):
       print("invalid input")
   



             	   
       	
