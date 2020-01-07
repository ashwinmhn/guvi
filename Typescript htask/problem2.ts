let object ={name : "RajiniKanth", age : 25, hasPets : true}
let i1=0;
let newKey:any[]=[];

function printAllkeys(object: { name: string; age: number; hasPets: boolean; }){
for (var keys in object){
    
    newKey[i1]=keys;
    i1++;
    
}
}

printAllkeys(object);

console.log(newKey);

