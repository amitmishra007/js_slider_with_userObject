let userObject = [
  {
    userID: 1,
    userPicURL: "./images/peter-doe.jpg",
    userName: "Peter Doe",
    userDesignation: "Product Manager",
    userBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe enimsed,necessitatibus illum dicta asperiores similique sequi ullam cum, ea nulla, esse voluptatum quis?",
  },
  {
    userID: 2,
    userPicURL: "./images/emma-doe.jpg",
    userName: "Emma Doe",
    userDesignation: "Designer",
    userBio:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et!",
  },
  {
    userID: 3,
    userPicURL: "./images/susan-doe.jpg",
    userName: "Susan Doe",
    userDesignation: "Developer",
    userBio:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I",
  },
];

// console.log(userObject[0].userPicURL);

// for (let i = 0; i < userObject.length; i++) {
//   console.log(userObject[i].userPicURL);
// }

// const rightButton = document.getElementsByClassName("right");

const imageURL = document.querySelector(".display-pic > img");
//   .getAttribute("src");

// console.log(imageURL);

const scriptTag = document.getElementsByTagName("link");
console.log(scriptTag);

const testimonialDiv = document.querySelector(".middle");

const leftButton = document.querySelector(".left");

const rightButton = document.querySelector(".right");

const displayPic = document.querySelector(".display-pic");

const displayName = document.querySelector(".display-name");
displayName.innerText = userObject[0].userName;
console.log(displayName.innerText);

const designation = document.querySelector(".designation");
designation.innerText = userObject[0].userDesignation;

const userBio = document.querySelector(".display-bio");
userBio.innerText = userObject[0].userBio;

var userIDCurrentValue = 1;

function nextSlide() {
  imageURL.setAttribute("src", userObject[userIDCurrentValue - 1].userPicURL);
  displayName.innerText = userObject[userIDCurrentValue - 1].userName;
  designation.innerText = userObject[userIDCurrentValue - 1].userDesignation;
  userBio.innerText = userObject[userIDCurrentValue - 1].userBio;
}

function previousSlide() {
  imageURL.setAttribute("src", userObject[userIDCurrentValue - 1].userPicURL);
  displayName.innerText = userObject[userIDCurrentValue - 1].userName;
  designation.innerText = userObject[userIDCurrentValue - 1].userDesignation;
  userBio.innerText = userObject[userIDCurrentValue - 1].userBio;
}

rightButton.addEventListener("click", () => {
  nextSlide();
  userIDCurrentValue++;
  if (userIDCurrentValue > userObject.length) {
    userIDCurrentValue = 1;
  }
});

leftButton.addEventListener("click", () => {
  previousSlide();
  userIDCurrentValue--;
  if (userIDCurrentValue < 1) {
    userIDCurrentValue = 3;
  }
});
