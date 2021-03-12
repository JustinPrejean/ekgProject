var agree = document.getElementById("agree");
var basicBtn = document.getElementById("basicBtn");
var advancedBtn = document.getElementById("advancedBtn");
var agreeMsg = document.getElementById("agreeMsg");

//user cannot move on without checking box when clicking basic button
basicBtn.addEventListener("click", () => {
  if (agree.checked != true) {
    agree.style.outline = "1px solid red";
    agreeMsg.style.display = "initial";
  } else {
    location.href = "basic.html";
  }
});

//user cannot move on without checking box when clicking advanced button
advancedBtn.addEventListener("click", () => {
  if (agree.checked != true) {
    agree.style.outline = "1px solid red";
    agreeMsg.style.display = "initial";
  } else {
    location.href = "advanced.html";
  }
});
