var ob={name: "ISRO", age: 35, role: "Scientist"};
var x: any[]=[];
var newList: any[][]=[];
var i2=0;
var i3=0;

function convertObjectToList(ob: { [x: string]: any; name?: string; age?: number; role?: string; }){

for(var keys in ob){
    x=[];
    i2=0;
    var value = ob[keys];
    var k=keys;
    x[i2]=k;
    x[i2+1]=value;
    newList[i3]=x;
    i2++;
    i3++;
    

}

}

convertObjectToList(ob);

console.log(newList);