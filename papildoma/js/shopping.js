function placeShoppingCartItems(){
    document.querySelector(".shoppingCart").innerHTML = "";

    let items = getItems();

    let localStorage = window.localStorage;

    let shoppingCartIdsInString = localStorage.getItem("items");

    let ids = shoppingCartIdsInString.split(",");

    let listOfItems = "";
    for (let index = 0; index < ids.length; index++) {
        const id = ids[index];
        for (let jandex = 0; jandex < items.length; jandex++) {
            const item = items[jandex];
            if(id == item.tag){
                listOfItems += "<li>"+item.description+"</li>";
            }
        }
    }

    document.querySelector(".shoppingCart").innerHTML = listOfItems;
}

function createClearButtonEvent(){
    let button = document.querySelector("#clear");

    button.addEventListener("click", clearShoppingCart);
}

function placeItems(){
    countItems();
    createClearButtonEvent();

    let items = getItems();

    let container = document.querySelector(".container");
    for (let index = 0; index < items.length; index++) {
        const element = items[index];

        let template = getTemplate();

        let item = document.createElement("div");
        item.setAttribute("class", "item");

        template = template.replace("{{item}}", element.description);
        template = template.replace("{{tag}}", element.tag);

        item.innerHTML = template;
        container.appendChild(item);
    }

    let buttons = document.querySelectorAll("button[id^='item']");

    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.addEventListener("click", function(){
            placeItemToShoppingCart(this.id);
            countItems();
            placeShoppingCartItems();
        })
    }
}

function countItems(){
    let counter = document.querySelector(".counter");

    let localStorage = window.localStorage;

    let items = localStorage.getItem("items");

    if(items){
        let count = items.split(",").length;
        counter.innerText = count;
    }
    else{
        counter.innerText = 0;
    }
}

function placeItemToShoppingCart(item){
    let localStorage = window.localStorage;

    let items = localStorage.getItem("items");

    if(items){
        items += "," + item;
        console.log(items);
        localStorage.setItem("items", items);
    }
    else{
        localStorage.setItem("items", item);
    }
}


function getTemplate(){
    return "<div><div>{{item}}</div><button id='{{tag}}'>Į krepšą</button></div>"
}

function getItems(){
    return [
        {
            tag: "item1",
            description: "bla bla bla 1"
        },
        {
            tag: "item2",
            description: "bla bla bla 2"
        },
        {
            tag: "item3",
            description: "bla bla bla 3"
        }
    ];
}

function clearShoppingCart(){
    let localStorage = window.localStorage;
    localStorage.setItem("items", "");
    countItems();
    placeShoppingCartItems();

}