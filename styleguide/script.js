const records = [
    {
        id: "1",
        album: "The Jaws Of Life",
        artist: "Pierce The Veil",
        price: 24,
        quantity: 10,
        disponible: true,
        img: "./imgs/the_jaws_of_life.jpg"
    },

    {
        id: "2",
        album: "The Black Parade",
        artist: "My Chemical Romance",
        price: 26,
        quantity: 10,
        disponible: true,
        img: "./imgs/the_black_parade.jpg"
    },

    {
        id: "3",
        album: "A Fever You Can't Sweat Out",
        artist: "Panic! at The Disco",
        price: 30,
        quantity: 10,
        disponible: true,
        img: "./imgs/a_fever_you_cant_sweat_out.jpg"
    },

    {
        id: "4",
        album: "Tickets to My Downfall",
        artist: "Machine Gun Kelly",
        price: 30,
        quantity: 10,
        disponible: true,
        img: "./imgs/tickets_to_my_downfall.jpg"
    },

    {
        id: "5",
        album: "Elsewhere",
        artist: "Set It Off",
        price: 32,
        quantity: 10,
        disponible: true,
        img: "./imgs/elsewhere.jpg"
    },

    {
        id: "6",
        album: "Kitten",
        artist: "Pocket Mirror",
        price: 5,
        quantity: 10,
        disponible: true,
        img: "./imgs/kitten.jpg"
    }

];

let counterProduct = 0;

records.forEach((product)=>{
    const ul = document.querySelector("#products")
    const li = document.createElement("li")
    li.id = product.id
    const pName = document.createElement("p")
    pName.innerText = product.album
    const pArtist = document.createElement("p")
    pArtist.innerText = product.artist
    const btnAdd = document.createElement("button")
    btnAdd.innerText = "Adicionar" 
    btnAdd.addEventListener("click",()=>{
        addToCart(product)
    })
    const img = document.createElement("img")
    if (product.img){
        img.src = product.img
    }
    li.append(pName,img,pArtist,btnAdd)
    ul.appendChild(li)
    counterProduct++
})
function addToCart(product){
    const ulCart = document.querySelector("#cart")
    const li = document.createElement("li")
    const pName = document.createElement("p")
    pName.innerText = product.album

    const btnRemove = document.createElement("button")
    btnRemove.innerText = "X"
    btnRemove.addEventListener("click",()=>{
        removeFromCart(product)
    })

    li.append(pName,btnRemove)
    ulCart.appendChild(li)
    console.log(product)
}
function removeFromCart(product){
    const ulCart = document.querySelector('#cart')
    const childrens = Array.from(ulCart.children)
    let li = ""
    childrens.forEach((item)=>{
        if (item.id==product.id){
            console.log('foi')
            li = item
        }
    console.log(li)
    li.remove();
})
}

