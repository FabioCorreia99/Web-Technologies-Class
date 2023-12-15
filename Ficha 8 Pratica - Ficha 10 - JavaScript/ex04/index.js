
/*
    USAR LET E CONST
    usar sempre que possivel === em vez de ==
    
*/
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

setInterval(() => {
    let data = new Date();
    let yy = data.getFullYear();
    let mm = data.getMonth();
    let dd = data.getDate()
    console.log(yy+":"+(mm+1)+":"+dd);   
}, 2000);
