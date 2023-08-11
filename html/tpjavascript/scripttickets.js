const precio = 200;
var cant = 0
var categ = 1

function calcular() {
    cant = Number(cantidad.value)
    categ = Number(categoria.value)
    pagar.textContent="Total a pagar: $"
    if(cant>0 &&  Number.isInteger(cant)){
        switch(categ){
            case 1:
                pagar.textContent += ((precio*0.2)*cant)
                break
            case 2:
                pagar.textContent += ((precio*0.5)*cant)
                break
            case 3:
                pagar.textContent += ((precio*0.85)*cant)
                break
            default:
                break
        }
    } else{
        alert("Error: Cantidad no válida")
        pagar.textContent="Total a pagar: $"
    }
}
function borrar() {
    cantidad.value = ""
    pagar.textContent="Total a pagar: $"
}