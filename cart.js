let cartLs=[];

if(localStorage.length>0){
    const itemCant=document.querySelector(".cantItem");
    cartLs=JSON.parse(localStorage.getItem("cart"));
    if(cartLs.length>0){
        itemCant.innerHTML=`${cartLs.length}`;
    }else{
        itemCant.innerHTML=`${0}`;
    }
    addHTMLcart();
}
function addHTMLcart(){
cartLs.forEach(element=>{
        const divCart=document.querySelector(".div__cart");
        const divItem=document.createElement('div');
        divItem.className="div__cart--item";
        divItem.innerHTML=`
        <img class="prdo--img--cart" src=${element.img} alt="">
        <h4 class="tittle--image--cart">${element.name}</h4>
        <input class="input--cant" type="number" name="" id="">
        <h4 class="price--image--cart">$3000</h4>
        `;
        divCart.appendChild(divItem);
})

}