# Grade range
#Below 40-F
#40-50 - E
#50-60 - D
#60-70 - C
#70-80 - B
#80-90 - A
#90-100 -A+

list=[]
print("Enter mark of any 5 subjects")
for i in range (0,5):
   print("Enter mark of subject ",i+1)
   a=int(input())
   list.append(a)

   #grade calculation
   if (a>0) and (a<40) :
       print("Grade F")
   if (a>40) and (a<50) or (a==40):
       print("Grade E")
   if (a>50) and (a<60) or (a==50):
   	   print("Grade D")
   if (a>60) and (a<70) or (a==60):
       print("Grade C")
   if (a>70) and (a<80) or (a==70):
       print("Grade B")
   if (a>80) and (a<90) or (a==80):
       print("Grade A")
   if (a>90) and (a<100) or (a==90) or (a==100):
       print("Grade A+")
   if(a>100) or (a<0) :
       print("invalid input")
   



             	   
       	