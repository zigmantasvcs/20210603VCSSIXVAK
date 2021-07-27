// cia rasyime funkcijas

// 
function sum1(x, y){
    return x + y;
}

function sum2(x, y){
   let sum = x + y;
   return sum;
}

function sum3(x, y){
    let sum = 0;
    sum += x;
    sum += y;
    return sum;
 }

 function showSum(x, y, element){
    let sum = sum1(x, y);

    element.innerHTML = sum; // idedu rezultata i elementa
 }

 
 function showPeople(array, list) {
   
   let liElements = "";
   for (let index = 0; index < array.length; index++) {
       const item = array[index];
       
       liElements += "<li>" + item + "</li>";
   }
   list.innerHTML = liElements;
}

function printPersonToCard(person, element){
            
   let innerStructure = "";

   innerStructure += "<p style=\"color:green\">Vardas: " + person.name + "</p>";
   innerStructure += "<p>Pavardė: " + person.surname + "</p>";
   innerStructure += "<p>Amžius: " + person.age + "</p>";
   innerStructure += "<p>Svoris: " + person.weight + "</p>";

   element.innerHTML = innerStructure;
}

function printPersonToCard2(person, element){
   let p1 = document.createElement("p");
   p1.setAttribute("style", "color:green");
   p1.innerText = "Vardas: ".concat(person.name);
   element.appendChild(p1);

   let p2 = document.createElement("p");
   p2.innerText = "Pavardė: " + person.surname;
   element.appendChild(p2);

   let p3 = document.createElement("p");
   p3.innerText = "".concat("Amžius: ", person.age);
   element.appendChild(p3)

   let p4 = document.createElement("p");
   p4.innerText = "Svoris: " + person.weight;
   element.appendChild(p4);
}

function printPersonToCard3(person, element){

   let p1 = createPElement("Vardas: " + person.name, "color:green");
   element.appendChild(p1);

   let p2 = createPElement("Pavardė: " + person.surname);
   element.appendChild(p2);

   let p3 = createPElement("Amžius: " + person.age);
   element.appendChild(p3);

   let p4 = createPElement("Svoris: " + person.weight);
   element.appendChild(p4);

   let img = createImgElement(person.photo);
   element.appendChild(img);
}

function createPElement(innerText, style){
   let p = document.createElement("p");
   
   if(style){
       p.setAttribute("style", style)
   }
   
   p.innerText = innerText;

   return p;
}

function createImgElement(src){
   let img = document.createElement("img");
   img.setAttribute("src", src);
   return img;
}
 