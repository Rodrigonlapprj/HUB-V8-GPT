const produtos = [
  // =========================
  // SELF-SERVICE AÇAÍ
  // =========================

  {
    id: "acai-300",
    categoria: "acai",
    nome: "Açaí Copo 300ml",
    preco: 9.00,
    imagem: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&auto=format&fit=crop&q=80",
    descricao: "Açaí super cremoso! Monte do seu jeito com +15 complementos e +20 caldas liberadas.",
    disponivel: true,
    destaque: false
  },

  {
    id: "acai-500",
    categoria: "acai",
    nome: "Açaí Copo 500ml",
    preco: 13.00,
    imagem: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&auto=format&fit=crop&q=80",
    descricao: "O tamanho mais pedido! Açaí cremoso + liberdade total para combinar acompanhamentos.",
    disponivel: true,
    destaque: true
  },

  {
    id: "acai-700",
    categoria: "acai",
    nome: "Açaí Copo 700ml",
    preco: 16.00,
    imagem: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&auto=format&fit=crop&q=80",
    descricao: "Tamanho Mega para apaixonados por açaí! Sirva-se à vontade com valor fixo.",
    disponivel: true,
    destaque: false
  },


  // =========================
  // SELF-SERVICE SORVETE
  // =========================

  {
    id: "sorvete-300",
    categoria: "sorvete",
    nome: "Sorvete Copo 300ml",
    preco: 12.00,
    imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&auto=format&fit=crop&q=80",
    descricao: "Mais de 20 sabores à sua escolha! Sirva-se com acompanhamentos e caldas ilimitadas.",
    disponivel: true,
    destaque: false
  },

  {
    id: "sorvete-500",
    categoria: "sorvete",
    nome: "Sorvete Copo 500ml",
    preco: 15.00,
    imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&auto=format&fit=crop&q=80",
    descricao: "Combine seus sabores favoritos de sorvete com caldas quentes e coberturas crocantes.",
    disponivel: true,
    destaque: true
  },

  {
    id: "sorvete-700",
    categoria: "sorvete",
    nome: "Sorvete Copo 700ml",
    preco: 18.00,
    imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&auto=format&fit=crop&q=80",
    descricao: "Experiência completa! Monte grandes camadas de sabores sem se preocupar com peso.",
    disponivel: true,
    destaque: false
  },


  // =========================
  // CASQUINHAS & CASCÕES
  // =========================

  {
    id: "casquinha-tradicional",
    categoria: "casquinha",
    nome: "Casquinha Tradicional",
    preco: 4.00,
    imagem: "casquinha.jpg",
    descricao: "Crocante e deliciosa. Sabores: Baunilha, Chocolate ou Mista.",
    disponivel: true,
    destaque: true
  },

  {
    id: "casquinha-trufada",
    categoria: "casquinha",
    nome: "Casquinha Trufada",
    preco: 6.00,
    imagem: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?w=200&auto=format&fit=crop&q=80",
    descricao: "Casquinha crocante com recheio interno de Ninho ou Nutella.",
    disponivel: true,
    destaque: false
  },

  {
    id: "cascao-tradicional",
    categoria: "casquinha",
    nome: "Cascão Tradicional",
    preco: 7.00,
    imagem: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&auto=format&fit=crop&q=80",
    descricao: "Cascão extra crocante e generoso. Baunilha, Chocolate ou Mista.",
    disponivel: true,
    destaque: false
  },

  {
    id: "cascao-trufado",
    categoria: "casquinha",
    nome: "Cascão Trufado",
    preco: 10.00,
    imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&auto=format&fit=crop&q=80",
    descricao: "Cascão grande com generosa camada interna de Ninho ou Nutella.",
    disponivel: true,
    destaque: true
  },


  // =========================
  // SUNDAES
  // =========================

  {
    id: "sundae-tradicional",
    categoria: "sundae",
    nome: "Sundae Tradicional",
    preco: 8.00,
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80",
    descricao: "Sorvete cremoso com calda especial. Chocolate, Morango ou Maracujá.",
    disponivel: true,
    destaque: false
  },

  {
    id: "sundae-prime",
    categoria: "sundae",
    nome: "Sundae Prime",
    preco: 10.00,
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80",
    descricao: "Coberturas nobres! Ninho, Nutella ou Ninho c/ Nutella.",
    disponivel: true,
    destaque: true
  },

  {
    id: "mega-sundae",
    categoria: "sundae",
    nome: "Mega Sundae",
    preco: 12.00,
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80",
    descricao: "Porção reforçada de sorvete. Chocolate, Morango ou Maracujá.",
    disponivel: true,
    destaque: false
  },

  {
    id: "mega-sundae-prime",
    categoria: "sundae",
    nome: "Mega Sundae Prime",
    preco: 14.00,
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80",
    descricao: "A experiência máxima em Sundae! Camadas nobres de Ninho ou Nutella.",
    disponivel: true,
    destaque: true
  },


  // =========================
  // MILK SHAKES TRADICIONAIS
  // =========================

  {
    id: "milkshake-300",
    categoria: "milkshake",
    nome: "Milk Shake 300ml",
    preco: 12.00,
    imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&auto=format&fit=crop&q=80",
    descricao: "Ultra cremoso e preparado na hora com os melhores sorvetes da casa.",
    disponivel: true,
    destaque: false
  },

  {
    id: "milkshake-500",
    categoria: "milkshake",
    nome: "Milk Shake 500ml",
    preco: 15.00,
    imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&auto=format&fit=crop&q=80",
    descricao: "O tamanho ideal para refrescar seu dia com muita cremosidade e sabor.",
    disponivel: true,
    destaque: true
  },

  {
    id: "milkshake-700",
    categoria: "milkshake",
    nome: "Milk Shake 700ml",
    preco: 19.00,
    imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&auto=format&fit=crop&q=80",
    descricao: "Tamanho generoso! O milkshake perfeito para durar mais tempo.",
    disponivel: true,
    destaque: false
  },


  // =========================
  // MILK SHAKES PRIME
  // =========================

  {
    id: "milkshake-prime-300",
    categoria: "milkshake",
    nome: "Milk Shake Prime 300ml",
    preco: 14.00,
    imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&auto=format&fit=crop&q=80",
    descricao: "Preparo especial com combinações e adicionais nobres incomparáveis.",
    disponivel: true,
    destaque: true
  },

  {
    id: "milkshake-prime-500",
    categoria: "milkshake",
    nome: "Milk Shake Prime 500ml",
    preco: 17.00,
    imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&auto=format&fit=crop&q=80",
    descricao: "Sabor intenso e textura aveludada para os paladares mais exigentes.",
    disponivel: true,
    destaque: false
  },

  {
    id: "milkshake-prime-700",
    categoria: "milkshake",
    nome: "Milk Shake Prime 700ml",
    preco: 20.00,
    imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&auto=format&fit=crop&q=80",
    descricao: "A versão definitiva! Generoso em tamanho e rico em recheios nobres.",
    disponivel: true,
    destaque: true
  },


  // =========================
  // POTES PARA LEVAR
  // =========================

  {
    id: "pote-sorvete-1l",
    categoria: "potes",
    nome: "Pote de Sorvete 1L",
    preco: 20.00,
    imagem: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200&auto=format&fit=crop&q=80",
    descricao: "Leve a cremosidade do sorvete Carioca Ice Cream para saborear em casa!",
    disponivel: true,
    destaque: false
  },

  {
    id: "pote-acai-1l",
    categoria: "potes",
    nome: "Pote de Açaí 1L",
    preco: 25.00,
    imagem: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&auto=format&fit=crop&q=80",
    descricao: "Açaí ultra cremoso em embalagem de 1 Litro para ter sempre por perto.",
    disponivel: true,
    destaque: false
  }
];