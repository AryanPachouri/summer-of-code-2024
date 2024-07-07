// let check=document.querySelector("#checking");
let check=document.getElementById("checking");

check.addEventListener("change",function(){
    if (this.checked) {
        document.querySelector(".cashadmin").innerHTML = "as Admin"
    }
    else{
        document.querySelector(".cashadmin").innerHTML = "as a Cashier"
    }
});