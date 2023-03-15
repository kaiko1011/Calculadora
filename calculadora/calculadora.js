
const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const ton=document.getElementById("ton")
const tlimpar=document.getElementById("tlimpar")
const tigual=document.getElementById("tigual")
const tcpy=document.getElementById("tcpy")
const copiar=document.getElementById("tcpy")
const calc_aba=document.getElementById("calc_aba")
const calc=document.getElementById("calc")
const img_aba_calc=document.getElementById("img_aba_calc")

let sinal=false
let decimal=false

teclasNum.forEach((el) => {
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(evt.target.innerHTML=="."){
            sinal=true
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0."
                }else      
                    display.innerHTML+=evt.target.innerHTML
                    //display.innerHTML+="." ou assim
                }
        }else{
            
        if(display.innerHTML=="0"){
            display.innerHTML=""
        }

            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
        
        decimal=false
    })
})

tlimpar.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})

tigual.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    
    display.innerHTML=res
})

calc_aba.addEventListener("click",(evt)=>{
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        evt.target.setAttribute("src","setaesquerda.svg")    
    }else{
        evt.target.setAttribute("src","setadireita.svg")
    }
})

tcpy.addEventListener("click",(evt)=>{
    let apagar=display.textContent.length 
    apagar-- 
    let resultado=display.textContent.slice(0,apagar)
    display.innerHTML=resultado
    
    if(apagar<=0){
        display.innerHTML="0"
    }

        decimal=false
        sinal=false
    })






/*copia conteudo do display para bloco de notas
copiar.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})*/