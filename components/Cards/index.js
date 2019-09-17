// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCreator(article){

    cardCont = document.querySelector(".cards-container");

    cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    headDiv = document.createElement("div");
    headDiv.classList.add("headline");
    headDiv.textContent = article["headline"]

    authorDiv = document.createElement("div");
    authorDiv.classList.add("author");

    imageDiv = document.createElement("div");
    imageDiv.classList.add("img-container");

    img = document.createElement("img");
    img.src = article["authorPhoto"];

    imageDiv.appendChild(img);

    authorSpan = document.createElement("span");
    authorSpan.textContent = "By " + article["authorName"];

    authorDiv.appendChild(imageDiv);
    authorDiv.appendChild(authorSpan);
    

    cardDiv.appendChild(headDiv);
    cardDiv.appendChild(authorDiv);

    cardCont.appendChild(cardDiv);


}

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(reponse => {
    console.log(reponse);

    
    const keys = Object.keys(reponse["data"]["articles"]);
    console.log(keys);
    
    for (const key of keys) {

        let keys2 = Object.keys(reponse["data"]["articles"][key]);

        for(const key2 of keys2) {

            articleCreator(reponse["data"]["articles"][key][key2]);
        }
    }
    


})
.catch( error => {

    console.log(error);
})
