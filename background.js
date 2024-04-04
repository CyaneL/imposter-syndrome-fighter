// console.log("This is a popup!");
// read local time - if reminder is auto-generated on time interval

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const saveButton = document.getElementById("saveName");
  const resetButton = document.getElementById("resetName");
  const nameField = document.getElementById("userName");
  const greetingDiv = document.getElementById("greeting");

  // Load and display the name if it exists in local storage
  chrome.storage.local.get(["userName"], function (result) {
    if (result.userName) {
      nameField.value = result.userName;
      greetingDiv.textContent = `Hello, ${result.userName}! Please remember:`;
    }
  });

  // Save the name when the button is clicked
  saveButton.addEventListener("click", function () {
    const userName = nameField.value;
    chrome.storage.local.set({ userName: userName }, function () {
      greetingDiv.textContent = `Hello, ${userName}! Please remember:`;
      document.querySelector();
    });
  });
  // reset the name input when click reset button
  resetButton.addEventListener("click", function () {
    const userName = nameField.value;
    chrome.storage.local.set({ userName: null }, function () {
      nameField.value = null;
      greetingDiv.textContent = `Hello, please tell me your name!`;
    });
  });

  // url constructor
  const memTextArr = [
    "you_can_do_it",
    "you_are_the_best",
    "you_are_picked_to_be_here",
    "you_are_so_qualified",
    "you_are_a_strong_and_capable_person",
    "trust_yourself_to_make_good_decisions",
    "you_are_worthy_of_your_achievements",
    "you_have_the_power_to_create_change",
    "you_are_as_good_as_people_say_you_are",
    "you_have_the_power_to_create_the_change",
    "you_are_allowed_to_make_mistakes",
    "you_are_a_good_learner",
    "you_accomplishments_are_valid",
    "you_learn_from_your_mistakes",
    "your_abilities_are_imperfectly_perfect",
    "to_make_small_steps_toward_big_goals_is_progress",
    "you_are_exactly_where_you_need_to_be_today",
    "",
    "",
    "",



  ];

  const imagesArr = [
    "https://static01.nyt.com/images/2013/06/16/movies/20130616_MONSTER-slide-UCE2/20130616_MONSTER-slide-UCE2-master1050.jpg?",
    "https://bpic.51yuansu.com/pic3/cover/01/90/73/59824ca7bfb3f_610.jpg?",
    "https://bpic.51yuansu.com/pic3/cover/02/89/62/5ab7a3da63763_610.jpg?",
    "https://cdn.pixabay.com/photo/2017/12/26/16/58/sketch-3040895_1280.png?",
    "https://cdn.pixabay.com/photo/2021/02/08/16/03/dinosaur-5995333_1280.png?",
    "https://cdn.pixabay.com/photo/2019/06/17/02/01/monster-4278973_1280.png?",
    "https://cdn.pixabay.com/photo/2015/04/15/20/21/cute-724507_1280.jpg?",
    "https://img.freepik.com/free-vector/happy-hairy-purple-alien-monster-cartoon-character_1308-157326.jpg?",
    "https://img.freepik.com/free-vector/terrified-orange-alien-monsters-cartoon-character-with-horns_1308-158237.jpg?"
  ]

  const basicUrl = "https://api.memegen.link/images/custom/_/";
  let memText = memTextArr[Math.floor(Math.random() * memTextArr.length)];
  let imageUrl = imagesArr[Math.floor(Math.random() * imagesArr.length)]
  const imageSize = `height=450&width=800`;
  const assembledUrl = `${basicUrl}${memText}${imageUrl.slice(-5)}background=${imageUrl}${imageSize}`;
  console.log(assembledUrl);

  // feature 1: link meme generator
  const img = document.createElement("img");
  img.setAttribute("src", assembledUrl);
  body.appendChild(img);
  // user name input on layer

  //   fetch(
  //     "https://api.memegen.link/images/custom/_/you_can_do_it.jpg?background=https://static01.nyt.com/images/2013/06/16/movies/20130616_MONSTER-slide-UCE2/20130616_MONSTER-slide-UCE2-master1050.jpg"
  //   ).then((data) => {
  //     console.log(data);
  //     const img = document.createElement("img");
  //     img.setAttribute("src", data.url);
  //     //img.innerHTML = data;
  //     document.querySelector("body").appendChild(img);
  //   });
});
// feature 2: add custom background and text
