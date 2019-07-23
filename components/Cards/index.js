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

const cardsContainer = document.querySelector('.cards-container');

function getArticle() {
  axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(dataSet => {
    console.log(dataSet);

    // let articleInfo = dataSet.data.articles;

    // createArticle(dataSet.data.articles);
    // createArticle(dataSet.data.articles);
    // createArticle(dataSet.data.articles);
    // createArticle(dataSet.data.articles);
    // createArticle(dataSet.data.articles);
    

})
.catch((err) =>{
    console.log('Error', err);
})
  
}


function createArticle(articleDataset){

    const cardEl = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgEl = document.createElement('div');
    const img = document.createElement('img');
    const byAuthor = document.createElement('span');

    cardEl.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgEl.classList.add('img-container');

    headline.textContent = articleDataset.data.articles.headline;
    img.src = articleDataset.data.articles.authorPhoto;
    byAuthor.textContent = 'By ' + articleDataset.data.articles.authorName;

    cardEl.appendChild(headline);
    cardEl.appendChild(author);
    author.appendChild(imgEl);
    imgEl.appendChild(img);
    author.appendChild(byAuthor);

    console.log(cardEl);

    return cardEl;
}

