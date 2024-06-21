// console.log("10 points to Gryfindor!");

const saveDraftBtn = document.querySelector(".save-draft-btn");
const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const inputComment = document.querySelector(".input-comment");

class fbValues {
  constructor(inputName, inputEmail, inputComment) {
    this.inputName = inputName;
    this.inputEmail = inputEmail;
    this.inputComment = inputComment;
  }
}

let fbValuesObj = JSON.parse(localStorage.getItem("fbValues"));
// console.log(fbValuesObj);

if (fbValuesObj) {
  inputName.value = fbValuesObj.inputName;
  inputEmail.value = fbValuesObj.inputEmail;
  inputComment.value = fbValuesObj.inputComment;
}

saveDraftBtn.addEventListener("click", () => {
  // console.log("SAVE DRAFT");

  fbValuesObj = new fbValues(
    inputName.value,
    inputEmail.value,
    inputComment.value
  );
  // console.log(fbValuesObj);

  localStorage.setItem("fbValues", JSON.stringify(fbValuesObj));
});
