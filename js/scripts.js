// Calculo de Orçamento
document.querySelector("#qtd").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value

    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco() {
    const qtd = document.querySelector("#qtd").value
    const temjs = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtd * 100;
    if (temjs) preco *= 1.1
    if (incluiLayout) preco += 500
    
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `Valor estimado R$ ${preco.toFixed(2)}`
}