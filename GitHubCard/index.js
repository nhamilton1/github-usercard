import axios from 'axios'


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['robDoesData',
'tetondan', 
'dustinmyers', 
'justsml',
'luishrd',
'bigknell'
];



const cards = document.querySelector('.cards')

axios.get('https://api.github.com/users/nhamilton1')
  .then(res => {
    // console.log(res)
    // const cardImage = res.data.avatar_url
    // const cardName = res.data.name 
    // const cardUser = res.data.login
    // const cardLoc = res.data.location
    // const cardref = res.data.html_url
    // const cardfollower = res.data.followers
    // const cardfollowing = res.data.following
    // const cardBio = res.data.bio
    const gitCard = gitMaker(res.data)
    cards.append(gitCard)
  })
  .catch(err => {
    console.error(err)
  })

function gitMaker(gitCard){

  const card = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardH3 = document.createElement('h3')
  const cardUserName = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardHref = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  card.classList.add('card')
  // cardImg.setAttribute('src', ${url})
  cardInfo.classList.add('card-info')
  cardH3.classList.add('name')
  cardUserName.classList.add('username')

  
  
  
  card.appendChild(cardImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardH3)
  cardInfo.appendChild(cardUserName)
  cardInfo.appendChild(cardLocation)
  cardProfile.textContent = `Profile: `
  cardInfo.appendChild(cardProfile)
  cardProfile.appendChild(cardHref)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  cardHref.href = `${gitCard.html_url}` 
  cardHref.textContent = `${gitCard.html_url}`


  cardImg.src = gitCard.avatar_url
  cardH3.textContent = `${gitCard.name}`
  cardUserName.textContent = `${gitCard.login}`
  cardLocation.textContent = `Location: ${gitCard.location}`


  
  // cardHref.setAttribute('href', `Profile: ${gitCard.html_url}`)
  
  
  
  
  


  cardFollowers.textContent = `Followers: ${gitCard.followers}`
  cardFollowing.textContent = `Following: ${gitCard.following}`
  cardBio.textContent = `Bio: ${gitCard.bio}`
  



  console.log(card)
  return card
}


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


  followersArray.forEach(user => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      const gitCard = gitMaker(res.data)
      cards.append(gitCard)
    })
    .catch(err => {
      console.error(err)
    })
  })

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


