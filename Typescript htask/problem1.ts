let obj={name: "RajiniKanth", age: 33, hasPets : false};
let newArray: any[]=[];
let i=0;

function printAllValues(obj: { [x: string]: any; } | undefined){

    for(var key in obj) {
        var value = obj[key];
        newArray[i]=value;
        i++;
    }
    

}


printAllValues(obj);




console.log(newArray);

