function tabuada() {
    let num = document.querySelector("#txtn")
    let tab = document.querySelector("#res")

    if (num.value.length == 0) {
        alert("Preencha os dados [CORRETAMENTE]")
    }
    else {
        let c = 1
        let n = Number(num.value)

        tab.innerHTML = ""
        
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
    
}