const consumoStarWars=(contador, x)=>{
    //incrementa de uno en uno el personaje de la api
    let suma = contador + 1
    let endpoint = 'https://swapi.dev/api/people/' + suma ;
    fetch(endpoint)
    .then (respuesta =>respuesta.json())
    .then (personaje=>{
        //CREAMOS VARIABLES PARA VINCULAR LOS DATOS DE jSON Y OBTENER LA INFORMACION
        let datoNombre = personaje.name
        let datoAltura = personaje.height
        let datoPeso  = personaje.mass
        let color = 'color' + x

        //CREAMOS DINAMICAMENTE LOS DIVS QUE CONTIENEN LAS CARTAS
        //CREAMOS UN CONTENEDOR PADRE,QUE LLAMA LA CLASE DEL DOM O HTML
        let contenedor = document.getElementsByClassName('contenedor')[x]

        //CREAMOS UNA VARIABLE, PARA QUE CREE UN DIV CUANDO ENTRE EN JUEGO LA FUNCION MAUSEENTER
        //CREE LOS DIV 'CARTA' CON LA INFORMACION SOLICITADA, A SU VEZ ES HIJO DEL CONTENEDOR
        let carta = document.createElement('div')
        carta.setAttribute('class','card m-3 ancho')
        contenedor.appendChild(carta)

        //CREAMOS UNA VARIABLE, PARA QUE CUANDO ENTRE EN JUEGO LA FUNCION MAUSEENTER
        //CREE LOS DIV 'ROW' CON LA INFORMACION SOLICITADA,QUIEN ES HIJO DEL DE CARTA 
        
        let row = document.createElement('div')
        row.setAttribute('class','row g-0')
        carta.appendChild(row)

        //CREAMOS UNA VARIABLE, PARA QUE CUANDO ENTRE EN JUEGO LA FUNCION MAUSEENTER
        //CREE LOS DIV 'COL1' CON LA INFORMACION SOLICITADA, A SU VEZ ES HIJO DE ROW, 
      
        let col1 = document.createElement('div')
        col1.setAttribute('class','col-md-2 d-flex justify-content-center align-items-center')
        row.appendChild (col1)

         //PADRE CONTENEDOR ->HIJO CARTA->HIJO ROW ->HIJO COL1->HIJO CIRCULO
        let circulo = document.createElement('div')
        circulo.setAttribute('class', `circulo ${color}`)
        col1.appendChild(circulo)

        //CREAMOS UNA VARIABLE, PARA QUE CUANDO ENTRE EN JUEGO LA FUNCION MAUSEENTER
        //CREE LOS DIV 'COL2' CON LA INFORMACION SOLICITADA, A SU VEZ ES HIJO DE ROW, 
        let col2 = document.createElement('div')
        col2.setAttribute('class','col-md-10')
        row.appendChild(col2)

        //CREAMOS UNA VARIABLE, PARA QUE CUANDO ENTRE EN JUEGO LA FUNCION MAUSEENTER
        //CREE LOS DIV 'CARDTWO' CON LA INFORMACION SOLICITADA, A SU VEZ ES HIJO DE COL2, 
        let cardTwo = document.createElement('div')
        cardTwo.setAttribute('class','card-body')
        col2.appendChild(cardTwo)

         //Creamos Elemento NOMBRE en DOM para darle TITULO a la card
        let nombre = document.createElement('h5')
        nombre.setAttribute('class','card-title')
        nombre.innerHTML = datoNombre
        cardTwo.appendChild(nombre)

        //Creamos Elemento parrafo en DOM para darle el parrafo a la card
        let parrafo = document.createElement('p')
        parrafo.setAttribute('class','card-text"')
        parrafo.innerHTML = `<b>Altura</b>: ${datoAltura} <br><b>Peso:</b> ${datoPeso}`
        cardTwo.appendChild(parrafo)

    })
}
//CREAMOS UN ARRAY QUE PARTE DE 0-4 CONTABILIZANDO 5 ELEMENTOS
let array1 = [0,1,2,3,4]
//RECORREMOS ESTE ARRAY, DANDOLE UN TIEMPO DE ESPERA
function* recorrerArray1() {
    let i = 0
    yield array1[i]//TIEMPO DE ESPERA ENTRE ELEMENTO
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    }

   //variable 
let numeroDeTurno = recorrerArray1()
let a = 0 //VARIABLE CRE INCREMENTA PARA EL PRIMER RANGO

$('#rango1').mouseenter (() => {
    
    if (array1.includes(a)) {
        let contador = numeroDeTurno.next().value 
        consumoStarWars(contador,0)
        a++
    }

})

let array2 = [5,6,7,8,9]//RANGO2
    function* recorrerArray2() {
    let i = 0
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    }

let numeroDeTurno2 = recorrerArray2()
let b = 5

$('#rango2').mouseenter (() => {
    
    if (array2.includes(b)) {
        let contador = numeroDeTurno2.next().value 
        consumoStarWars(contador,1)
        b++
    } 
    
})


let array3 = [10,11,12,13,14]
function* recorrerArray3() {
    let i = 0
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    }

let numeroDeTurno3 = recorrerArray3()
let c = 10//COMIENZA PERSONANJES

$('#rango3').mouseenter (() => {

    if (array3.includes(c)) {//PAARTE EN EL RANGO3
        let contador = numeroDeTurno3.next().value 
        consumoStarWars(contador,2)
        c++
    } 
    
    
})