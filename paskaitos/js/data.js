function placeItems(container){
    let dataArray = getGalleryData();

    let allItems = "";
    for (let index = 0; index < dataArray.length; index++) {
        const item = dataArray[index];

        let currentHtml = getGalleryItemTemplate();
        
        currentHtml = currentHtml.replace("{{image}}", item.image);
        currentHtml = currentHtml.replace("{{description}}", item.description);

        allItems += currentHtml;
    }

    container.innerHTML = allItems;

}

function getGalleryData(){
    return [
        {
            image: "https://picsum.photos/800/800?random=1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ea nobis enim beatae ex velit maxime odit qui maiores et facere temporibus nisi, voluptatum deserunt eos blanditiis. Quasi, ut."
        },
        {
            image: "https://picsum.photos/800/800?random=2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ea nobis enim beatae ex velit maxime odit qui maiores et facere temporibus nisi, voluptatum deserunt eos blanditiis. Quasi, ut."
        },
        {
            image: "https://picsum.photos/800/800?random=3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ea nobis enim beatae ex velit maxime odit qui maiores et facere temporibus nisi, voluptatum deserunt eos blanditiis. Quasi, ut."
        },
        {
            image: "https://picsum.photos/800/800?random=4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ea nobis enim beatae ex velit maxime odit qui maiores et facere temporibus nisi, voluptatum deserunt eos blanditiis. Quasi, ut."
        },
        {
            image: "https://picsum.photos/800/800?random=5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ea nobis enim beatae ex velit maxime odit qui maiores et facere temporibus nisi, voluptatum deserunt eos blanditiis. Quasi, ut."
        },
        {
            image: "https://picsum.photos/800/800?random=6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ea nobis enim beatae ex velit maxime odit qui maiores et facere temporibus nisi, voluptatum deserunt eos blanditiis. Quasi, ut."
        },
        {
            image: "https://picsum.photos/800/800?random=7",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ea nobis enim beatae ex velit maxime odit qui maiores et facere temporibus nisi, voluptatum deserunt eos blanditiis. Quasi, ut."
        }
    ];
}

function getGalleryItemTemplate(){
    return '<div class="item"> <div class="photo"> <div class="image"> <img src="{{image}}" alt=""> </div><div class="description"> <p>{{description}}</p></div></div></div>';
}