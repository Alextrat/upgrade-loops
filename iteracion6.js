const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    for(let posicion of toys){
        if (posicion.name.includes("gato")== true){
  
            toys.splice(posicion,1) 
            // console.log(toys)
            
        }
    }
    console.log(toys)