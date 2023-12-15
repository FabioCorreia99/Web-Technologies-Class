
/*
    USAR LET E CONST
    usar sempre que possivel === em vez de ==
    
*/

setInterval(() => {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    console.log(hora+":"+minutos+":"+ segundos)   
}, 2000);
