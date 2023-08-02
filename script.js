let notifications = document.querySelector(".notifications");


let arrName = ["Mark Webber","Angela Gray","Jacob Thompson","Rizky Hasanuddin","Kimberly Smith","Nathan Peterson","Anna Kim",]
let arrimg = ["./assets/images/avatar-mark-webber.webp", "./assets/images/avatar-angela-gray.webp", "./assets/images/avatar-jacob-thompson.webp", "./assets/images/avatar-rizky-hasanuddin.webp", "./assets/images/avatar-kimberly-smith.webp", "./assets/images/avatar-nathan-peterson.webp", "./assets/images/avatar-anna-kim.webp",]
let arrmess = ["reacted to your recent post <span id=line>My first tournament today! </span> <div id=div></div>","Followed you <div id=div></div>","has joined your group <span id=chess>Chess Club</span> <div id=div></div>","send you a private message","commented on your picture <img src=./assets/images/image-chess.webp alt=picture class=img></img>","reacted to your recent post 5 end-game strategies to increase your win rate","left the group <span id=chess>Chess Club</span>",]
let arrtime = ["1m ago","5m ago","1 day ago","5 days ago <div class=divMess>Hello thanks for setting up the Chess Club. I've been a member for a <br> few weeks now and I'm already having lots of fun and improving my <br> game.</div>","1 week ago","2 weeks ago","2 weeks ago", ]

console.log(arrName)

for(let i = 0 ; i < arrName.length ; i++) {
    notifications.innerHTML += `
    <div class="cardNot">
    <img src="${arrimg[i]}" alt="">
    <h3>
    <span id="Name">${arrName[i]}</span> ${arrmess[i]} 
        <p>
        ${arrtime[i]}
        </p>  
    </h3>
    


    
    </div>
    `
}