'use strict'
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


for(let i =0; i <alumns.length; i++){
    if(alumns[i].T1 + alumns[i].T2 + alumns[i].T3 >=2 ){
        console.log('el alumno '+ alumns[i].name + ' está aprobado')
        alumns[i].isAppoved = true
    }else{
        console.log('el alumno '+ alumns[i].name + ' está suspenso')
        alumns[i].isAppoved = false
    }

}
console.log(alumns)

