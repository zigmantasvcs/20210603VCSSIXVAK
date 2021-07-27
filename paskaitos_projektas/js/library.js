function doScroll(id){
    document.querySelector("[href='#"+id+"']").addEventListener("click", function(event){
        scrollsTo(id);
    })
}

function scrollsTo(elementId){
    var yourHeight = 0.1;

    document.querySelector("#"+elementId).scrollIntoView(true);

    var scrolledY = window.scrollY;

    if(scrolledY){
        window.scroll({left: 0, top: scrolledY-yourHeight, behavior: 'smooth'});
    }
}