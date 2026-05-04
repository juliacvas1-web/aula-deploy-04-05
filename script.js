let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
 
let valorUnitario = document.getElementById("valor-unitario");
 
const precoUnitario = 11.66
 
valorUnitario.innerText = `Valor: R$ ${precoUnitario}`
 
let subtotalInfo = {
  quantidade: 1,
  valor: precoUnitario,
};
 
 
function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}
 
atualizarSubtotal()
 
// declarar variaveis - buscar html
const inputQuantidade = document.getElementById("quantidade-produto-01")
const botaoAdicionar = document.getElementById("btn-adicionar-produto-01")
const botaoSubtrair = document.getElementById("btn-subtrair-produto-01")
 
// Ação / Função
function adicionarUm(){
  const valorAtual = Number(inputQuantidade.value)
  inputQuantidade.value = valorAtual+ 1 // o value por padrão é texto
 
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1
  subtotalInfo.valor = subtotalInfo.valor + precoUnitario // 11.66
 
  atualizarSubtotal()
}
 
function subtrairUm(){
  const valorAtual = Number(inputQuantidade.value)
 
  if(valorAtual <=0) {
    return
  }
  inputQuantidade.value = valorAtual- 1 // o value por padrão é texto
 
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1
  subtotalInfo.valor = subtotalInfo.valor - precoUnitario
 
  atualizarSubtotal()
}
 
// Evento
botaoAdicionar.addEventListener('click', adicionarUm)
botaoSubtrair.addEventListener('click', subtrairUm)
 