function clica(){
    let cli = prompt('Qual seu nome?')
    let res = window.document.getElementById('retorno')
  return res.innerHTML = `<p>É um prazer ${cli} em te conhecer!</p>`
}