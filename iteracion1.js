const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

// products.forEach(function (param) {  
//     if(param.includes('Camiseta')){
//         console.log(param);
//     }
// });

for (let i of products){
    if(i.includes("Camiseta")){
        console.log(i);
    }
}