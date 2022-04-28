const marcas = [
    {
        name: 'Mercedes',
        rating: 10,
    },
    {
        name: 'Tata',
        rating: 2,
    },
    {
        name: 'Ford',
        rating: 7,
    },
    {
        name: 'Seat',
        rating: 8,
    },
    {
        name: 'Dacia',
        rating: 5,
    },
];

// const marcaMala = marcas[2];
// const index = marcas.indexOf(marcaMala);

// console.log(index);

// *
//  * #1 Añade una nueva marca a tu array de Marcas con los datos que quieras.
    marcas.push({name:'Renault', rating: 6});
    // console.log(marcas);

    //  * #2 Elimina la marca con menos valoración. No nos gustan las cutreces.
    var min = 99;
    var marcaMin;
    marcas.forEach(function(elem){
        if(elem.rating<min){
            min = elem.rating;
            marcaMin = elem.name;
        }
    });

    const indexMin = marcas.findIndex(elem => {
        return elem.name === marcaMin;
    });

    // marcas.splice(1,1);
    console.log(marcas);

//  * #3 Imprime un mensaje por cada marca que diga
//  * La marca XXXXXXX tiene una valoración de XX en el mercado.

    for(let i of marcas){
        console.log('La marca ', i.name, ' tiene una valoracion de ',i.rating, ' en el mercado');
    }

//  * #4 Ordena las marcas según su valoración. Pista: función de sort, accediendo
//  * a la propiedad rating de la marca.

    
//    marcas.sort((a,b) => a.rating - b.rating);   //asc

   marcas.sort((a,b) => b.rating - a.rating);   // desc

   console.log(marcas);


//  * #5 Crea un nuevo array con este dato ficticio.
//  * marca.unitsSelled = (multiplicar rating * 100)
    
    let nuevaMarcas = marcas;

    nuevaMarcas.map(function (param) {  
        param.unitsSelled = param.rating*100;
    });

    console.log(nuevaMarcas);