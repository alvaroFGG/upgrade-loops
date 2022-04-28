const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
        {name: 'Alvaro', T1: true, T2: true, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.map(function (param) {  
    if((param.T1==true || param.T2==true) && (param.T2==true || param.T3==true)){
        param.isApproved = true;
    }else{
        param.isApproved = false;
    }
})

// comprobamos cada uno de los alumnos

for (let i of alumns){
    console.log(i)
}