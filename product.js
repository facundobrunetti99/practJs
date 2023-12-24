const extraerProductos= async()=>{
    const resp=await fetch("./products.json");
    const data= await resp.json();

    cargarProducts(data);


}
extraerProductos();
let cart=[];

function cargarProducts(data){
    const date=data;



    date.forEach(element => {
    const divMain=document.querySelector('.main');
    const prodComprar=document.createElement('div');
    prodComprar.className="prod__comprar";
    console.log(element.length);
    prodComprar.innerHTML=`
    <img class="prdo--img" src=${element.img} alt="">
    <h4 class="tittle--image">${element.name}</h4>
    <input type="button" value="Comprar" class="prod--button">
    `;
    divMain.appendChild(prodComprar);
    });
    
  
}

