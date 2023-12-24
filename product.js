const extraerProductos= async()=>{
    const resp=await fetch("./products.json");
    const data= await resp.json();
    cargarProducts(data);
}

extraerProductos();
let cart=[];
let date=[];

if(localStorage.length>0){
    const itemCant=document.querySelector(".cantItem");
    cart=JSON.parse(localStorage.getItem("cart"));
    if(cart.length>0){
        itemCant.innerHTML=`${cart.length}`;
    }else{
        itemCant.innerHTML=`${0}`;
    }
    
}
function cargarProducts(data){
    date=data;
    date.forEach(element => {
    const divMain=document.querySelector('.main');
    const prodComprar=document.createElement('div');
    prodComprar.className="prod__comprar";
    console.log(element.length);
    prodComprar.innerHTML=`
    <img class="prdo--img" src=${element.img} alt="">
    <h4 class="tittle--image">${element.name}</h4>
    <input type="button"  onClick="addtoCart(${element.id})" value="Comprar" class="prod--button">
    `;
    divMain.appendChild(prodComprar);
    });
    
}
function addtoCart(id){
    date.forEach(element=>{
            if(element.id===id){
                cart.push(element);
                let objLs=JSON.stringify(cart);
                localStorage.setItem("cart",objLs);
                const itemCant=document.querySelector(".cantItem"); 
                itemCant.innerHTML=`${cart.length}`;   
            }

    })
}

