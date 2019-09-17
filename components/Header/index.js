// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    div = document.createElement("div");
    div.classList.add("header");

    dataSpan = document.createElement("span");
    dataSpan.classList.add("date");
    dataSpan.textContent = "MARCH 28, 2019";

    h1 = document.createElement("h1");
    h1.textContent = "Lambda Times";

    tempSpan = document.createElement("span");
    tempSpan.classList.add("temp");
    tempSpan.textContent = "98°";

    div.appendChild(dataSpan);
    div.appendChild(h1);
    div.appendChild(tempSpan);


    return div;
    
}

headCont = document.querySelector(".header-container");
headerDiv = Header();

headCont.appendChild(headerDiv);



