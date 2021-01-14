/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
axios
.get("https://api.github.com/users/emmac124")
.then((res) => {
  console.log(axios.get("https://api.github.com/users/emmac124"));
  const name = res.data.name;
  const 
})
.catch(err => {
  console.log(err);
})
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

const followersArray = [];

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

function userCardMaker( {name, login, location, url, followers, following, bio} ){

  const userCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userAddress = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  userCard.appendChild(userImg);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(usersName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userAddress);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  userCard.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  userName.classList.add('username');

  userImg.src('"https://avatars3.githubusercontent.com/u/74630101?v=4"');
  usersName.textContent = name;
  userName.textContent = login;
  userLocation.textContent = `Location: ${location}`;
  userProfile.textContent = 'Profile: ';
  userAddress.textContent = url;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent =  `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;

  

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
