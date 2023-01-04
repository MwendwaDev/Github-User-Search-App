let API = "https://api.github.com/users/"
async function githubUser(username) {
    let resp = await fetch (API + `${username}`)
    let data = await resp.json()
    let name = data.name
    let id =data.id
    let bio = data.bio
    let avatar_url = data.avatar_url
    let following = data.following
    let followers = data.followers
    let repos = data.public_repos

    console.log(name, id, bio, avatar_url, following, followers)

    const nameP = document.getElementById('name')
    nameP.innerText = `User Name: ${name}`

    const idP = document.getElementById('loginid')
    idP.innerText = `User id: ${id}`

const bioHolderP = document.getElementById('bioHolder')
bioHolderP.innerText = `Bio: ${bio}`

const imgP = document.getElementById('image').src = `${avatar_url}`;

const followingP = document.getElementById('following')
followingP.innerText = `Following: ${following}`

const followersP = document.getElementById('followers')
followersP.innerText = `Followers: ${followers}`

const reposP = document.getElementById('repos')
reposP.innerText = `Public Repos: ${repos}`

let formP = document.getElementById('form')
let inputP = document.getElementById('search')



formP.addEventListener("submit", (e) => {
   e.preventDefault();
  const user = search.value;
   if (user) {
       githubUser(user);
    search.value = "";
    }
  });

}
githubUser('octocat')











