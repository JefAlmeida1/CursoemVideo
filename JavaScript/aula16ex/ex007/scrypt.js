let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n){
    if (Number (n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if (l.indexOF(Number (n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let intem = document.createElement('option')
        intem.text = `Valor ${num.value} adicionar.`
        lista.appendChild(item)
    }else {
        alert("Valor invalido ou já encontrado na lista")
    }
    num.value = ''
    num.focus() 
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores anres de finalizar!')

    }else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            if (valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informando foi ${menor}.</p>`
        res.innerHTML += `<p>Soma todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é $${media}. </p>`

    }
}