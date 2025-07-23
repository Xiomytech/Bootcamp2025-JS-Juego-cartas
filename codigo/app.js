let repartio= false;
let cartas=[];

function repartir() {
    let tablero=document.getElementById("tablero");
    tablero.innerHTML="";
    const TOTAL_CARTAS=10;
    cartas=[];
    for(let i=0; i<TOTAL_CARTAS; i++) {
        let carta=document.createElement("img");
        let indice=Math.floor(Math.random()*52) + 1;
        cartas.push(indice);
        carta.src="imagenes/cartas[1]/Carta"+indice+".JPG";
        tablero.appendChild(carta);
    }
    const audio=new Audio("sonidos/repartir.mp3");
     audio.play().then(()=>{
            window.alert("Se han repartido las 10 cartas");
        } );
    repartio=true;
 }

function verificar(){
    if(!repartio){
        window.alert("No se han repartido las cartas");
    }
    else{
        //iniciar los contadores en 0
        contadores=new Array(13).fill(0);
        //recorrer la lista de las cartas
        for(let i=0; i < cartas.length; i++) {
            let position=cartas[i]%13;
            if(position==0){
                position=12;
            }
            else{
                position--;
            }
            contadores[position]++;

     }  
     nombreCartas=["As","Dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","Jack","queen","king"];
    let mensaje="Se encontraron los siguientes grupos:\n";
    Grupos=["vacio", "Non", "Par", "Terna", "Cuarta", "Quinta", "Sexta", "Septima", "Octava", "Novena", "Decima"];

     //recorrer los contadores  
             for(let i=0; i <contadores.length; i++) {
                if(contadores[i]>=2){
                mensaje+=Grupos[contadores[i]]+" cartas de " +nombreCartas[i]+"\n";
}
    }
    window.alert(mensaje);
}
}