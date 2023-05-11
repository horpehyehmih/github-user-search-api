const input = document.querySelector("input");
const btn = document.querySelector(".search-btn");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const followings = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const twi = document.querySelector(".twi");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const githubio = document.querySelector(".githubBio");
let img = document.createElement("img");
let block = document.querySelector(".mainImg");

btn.addEventListener("click" , function () {
    const url = `https://api.github.com/users/${input.value}`;
    async function getUrl() {
        const response = await fetch(url);
        const data = await response.json();
        const dateData = data.created_at.slice(0, data.created_at.length - 10);

        img.src = data.avatar_url;
        block.appendChild(img)
        block.style.border = "none";

        user.innerHTML = data.name;
        login.innerHTML = `@${data.login}`;
        joined.innerHTML = `Joined ${dateData}`;
        follower.innerHTML = data.followers;
        followings.innerHTML = data.following;
        repo.innerHTML = `${data.public_repos}`;

        locations.innerHTML = data.location === "" || data.location ? data.location : "No location";
        twi.innerHTML = data.twitter_username === "" || data.twitter_username ? data.twitter_username :"No twitter";
        websites.innerHTML = data.blog === "" || data.blog ? data.blog : "No website";
        companies.innerHTML = data.company === "" || data.company ? data.company : "No company";
        githubio.innerHTML = data.bio === "" || null ? data.bio : "This profile has no bio..."

    }
    getUrl();
    input.value = "";
})