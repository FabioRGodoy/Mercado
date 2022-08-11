const products = [
    {
      title: "Uva Crimson",
      price: 8.99,
      category: "Frutas",
      image: undefined,
      imageDescription: "",
    },
    {
      title: "Banana",
      price: 5.69,
      category: "Frutas",
      image: "./img/products/product_2.svg",
      imageDescription: "Imagem de cachos de banana",
    },
    {
      title: "Mamão",
      price: 4.99,
      category: "Frutas",
      image: "./img/products/product_3.svg",
      imageDescription: "Imagem de varios Mamoes",
    },
    {
      title: "Maçã",
      price: 9.2,
      category: "Frutas",
      image: "./img/products/product_4.svg",
      imageDescription: "imagem de uma maçã com arvores de fundo",
    },
    {
      title: "Refrigerante",
      price: 8.99,
      category: "Bebidas",
      image: undefined,
      imageDescription: "",
    },
    {
      title: "Vinho",
      price: 8.99,
      category: "Bebidas",
      image: "./img/products/product_6.svg",
      imageDescription: "imagem de uma garrafa de vinho em cima de uma mesa com uma churrasqueira acesa",
    },
    {
      title: "Água Tônica",
      price: 8.99,
      category: "Bebidas",
      image: undefined,
      imageDescription: "",
    },
    {
      title: "Água de coco",
      price: 8.99,
      category: "Bebidas",
      image: "./img/products/product_8.svg",
      imageDescription: "./img/products/product_8.svg",
    },
  
    {
      title: "Sabonete",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_9.svg",
      imageDescription: "Imagem de dois sabonetes em cima de uma mesa",
    },
  
    {
      title: "Detergente",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_10.svg",
      imageDescription: "Imagem de um detergente como fundo uma parede roxa",
    },
  
    {
      title: "Limpa superfícies",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_11.svg",
      imageDescription: "imagem com uma mão usando luva borifando o produto em uma superficie de madeira",
    },
  
    {
      title: "Lustra Móveis",
      price: 8.99,
      category: "Higiene",
      image: undefined,
      imageDescription: "",
    },
  ];
  
  const fruits = document.getElementsByClassName('products-content fruits')
  
  let list = document.createElement('ul')
    
  for(let i = 0; i < products.length; i++){
      if(products[i].image == undefined){
          products[i].image = "./img/products/no-img.svg"
          products[i].imageDescription = "Produto sem imagem"
      }
      if(products[i].category == "Frutas"){
        
        
        let product = document.createElement('li')
        let productImg = document.createElement('img')
        let productMain = document.createElement('main')
        let productTitle = document.createElement('h1')
        let productCategory = document.createElement('h5')
        let productPrice = document.createElement('strong')
        
        product.className = 'product'
        productImg.className = 'product-img'
        productMain.className = 'product-main'
        productTitle.className = 'product-title'
        productCategory.className = 'product-category'
        productPrice.className = 'product-price'
  
        productImg.src = products[i].image
        productImg.alt = products[i].imageDescription
        productTitle.innerText = products[i].title
        productCategory.innerText = products[i].category
        productPrice.innerText = `R$ ${products[i].price}`
  
        fruits[0].appendChild(list)
        
        product.append(productImg, productMain)
        productMain.append(productTitle, productCategory, productPrice)
        list.appendChild(product)
        
      fruits[0].appendChild(list)
      }
    }
  
    const drinks = document.getElementsByClassName('products-content drinks')
  
    let list2 = document.createElement('ul')
  
    for(let i = 0; i <products.length; i++){
      
      if(products[i].image == undefined){
        products[i].image = "./img/products/no-img.svg"
        products[i].imageDescription = "Produto sem imagem"
      }
      if(products[i].category == "Bebidas"){
        let product = document.createElement('li')
        let productImg = document.createElement('img')
        let productMain = document.createElement('main')
        let productTitle = document.createElement('h1')
        let productCategory = document.createElement('h5')
        let productPrice = document.createElement('strong')
        
        product.className = 'product'
        productImg.className = 'product-img'
        productMain.className = 'product-main'
        productTitle.className = 'product-title'
        productCategory.className = 'product-category'
        productPrice.className = 'product-price'
  
        productImg.src = products[i].image
        productImg.alt = products[i].imageDescription
        productTitle.innerText = products[i].title
        productCategory.innerText = products[i].category
        productPrice.innerText = `R$ ${products[i].price}`
  
        drinks[0].appendChild(list2)
        
        list2.appendChild(product)
        product.append(productImg, productMain)
        productMain.append(productTitle, productCategory, productPrice)
        
        drinks[0].appendChild(list2)
      }
    }
  
    const hygiene = document.getElementsByClassName('products-content hygiene')
  
    let list3 = document.createElement('ul')
  
    for(let i = 0; i <products.length; i++){
      
      if(products[i].image == undefined){
        products[i].image = "./img/products/no-img.svg"
        products[i].imageDescription = "Produto sem imagem"
      }
      if(products[i].category == "Higiene"){
        let product = document.createElement('li')
        let productImg = document.createElement('img')
        let productMain = document.createElement('main')
        let productTitle = document.createElement('h1')
        let productCategory = document.createElement('h5')
        let productPrice = document.createElement('strong')
        
        product.className = 'product'
        productImg.className = 'product-img'
        productMain.className = 'product-main'
        productTitle.className = 'product-title'
        productCategory.className = 'product-category'
        productPrice.className = 'product-price'
  
        productImg.src = products[i].image
        productImg.alt = products[i].imageDescription
        productTitle.innerText = products[i].title
        productCategory.innerText = products[i].category
        productPrice.innerText = `R$ ${products[i].price}`
  
        hygiene[0].appendChild(list3)
        
        list3.appendChild(product)
        product.append(productImg, productMain)
        productMain.append(productTitle, productCategory, productPrice)
        
        hygiene[0].appendChild(list3)
      }
    }