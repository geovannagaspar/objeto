// produtos da loja
const produtos = [
    {
      nome: "Batom",
      categoria: "Lábios",
      quantidade: 40,
      preco: 25
    },
    {
      nome: "Rímel",
      categoria: "Olhos",
      quantidade: 25,
      preco: 35
    },
    {
      nome: "Base",
      categoria: "Pele",
      quantidade: 18,
      preco: 65
    },
    {
      nome: "Blush",
      categoria: "Rosto",
      quantidade: 22,
      preco: 42
    },
    {
      nome: "Gloss",
      categoria: "Lábios",
      quantidade: 30,
      preco: 20
    },
    {
      nome: "Delineador",
      categoria: "Olhos",
      quantidade: 15,
      preco: 28
    },
    {
      nome: "Corretivo",
      categoria: "Pele",
      quantidade: 20,
      preco: 38
    },
    {
      nome: "Pó compacto",
      categoria: "Rosto",
      quantidade: 12,
      preco: 45
    },
    {
      nome: "Sombra",
      categoria: "Olhos",
      quantidade: 10,
      preco: 50
    },
    {
      nome: "Lápis de boca",
      categoria: "Lábios",
      quantidade: 24,
      preco: 18
    }
  ];

// local onde os produtos vao aparecer
const corpoTabela = document.getElementById("corpoTabela")

// mostra os produtos na tabela
for (let produto of produtos){

    // cria uma linha para cada produto
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    // coloca a linha na tabela
    corpoTabela.appendChild(linha)
}