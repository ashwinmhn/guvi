#u: sam p : pass*123
#U: ram p: pass*111
#U: gladys P: pass*101

#name={'1':'sam','2':'ram','3':'gladys'}
#pwd={'sam':'pwd*123','ram':'pwd*111','gladys':'pwd*101'}

#registration
name={'1':'','2':''}
pwd={'1':'','2':''}
#print (type(pwd))
i=1

print("New user registration")
print("enter username")
new_u=input()
name['1']=new_u
print("enter password")
new_p=input()
pwd['1']=new_p

while(i<6):
  
#Login
  user=0
  p=0
  print("                                   ")
  print("Login")
  print("                                   ")
  print("Enter username")
  user=str(input())
  print("                                   ")
  print("Enter password")
  p=str(input())



  if(user==name['1']):
    if(p==pwd['1']):
       print("                                   ")
       print("correct user credentials")
       print("                                   ")
       print("                                   ")
       print("-----------Distance tariff---------")
       print("0-2 kms  Rs 100")
       print("                                   ")
       print("2-10 kms Rs 200")
       print("                                   ")
       print("10-40 kms Rs 300")
       print("                                   ")
       print("Above 40 kms Rs 500")
       print("-----------------------------------")

       print("                                   ")
       print("-----------Ride Options-------------")
       print("Eco    ( cars : Indica , Celerio , Indigo")
       print("                                   ")
       print("premium  (cars : Corolla , Octavia , Civic , Innova ")
       print("                                   ")
       print("Luxury  ( Bmw 3 series, Merc C class, Jaguar XE")
       print("-------------------------------------------")
       print("                                   ")
       print("------------Ride Tariff-------------------")
       print("Eco  Standard tariff")
       print("                                   ")
       print("premium +Rs500 over Distance tariff")
       print("                                   ")
       print("Luxury  +Rs 1000 over Distance tariff")
       print("-------------------------------------------")

       print("                                   ")
       print("Enter Distance ")
       d=int(input())
       if(d>50):
        print("Service Not Available Beyond 50 kms")
        print("Enter distance below 50 kms")
        d=int(input())


       sum=0
       ride=0
       dist=0
       print("                                   ")
       print("Enter Ride Option")
       rideop=str(input())
 
       r1="eco"
       r2="premium"
       r3="luxury"

       

       if(rideop==r2) :
         ride=500

       elif(rideop==r3):
         ride=1000

       else :
        print("Enter valid option")



#tariff calculation

       if(d>0) and (d<=2):
         dist=100
       elif(d>2) and (d<=10):
         dist=200
       elif(d>10) and (d<=20):
         dist=300
       elif(d>20) and (d<=50):
         dist=500
       elif(d<=0):
         print("Invalid Input") 
       
       

#Invoice calculation
       if(rideop==r1): 
         sum=dist
       sum=dist+ride

 # Invoice
       print("                                   ")
       print("-------------Invoice----------------")
       print("Distance   : Rs",dist)  
       print("Ride Option :Rs",ride)
       print("-------------------------------------")
       print("Total Cost: Rs",sum)
       print("----------Thank you------------------  ")

    else :
     print("invalid input")
    
    print("                                   ")
    print("To continue press 1 ")
    print("To exit press 0")

    exit=int(input())

    if(exit==0):
     i=7

  


 








	






