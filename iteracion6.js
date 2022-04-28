const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'},
    ];

for(let i of toys){
    if(i.name.includes("gato")){
        let index = toys.indexOf(i);
        toys.splice(index,2);
        // console.log(index);
    }
}

console.log(toys);