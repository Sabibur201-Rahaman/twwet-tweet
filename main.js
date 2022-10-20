console.log("connected");

const filterInputElm = document.querySelector("#filter");
const textInputElm = document.querySelector(".textInput");
const collectionElm = document.querySelector(".collection");
const msgElm = document.querySelector(".msg");
const form = document.querySelector("form");

let textUtils = localStorage.getItem("storeProducts")
  ? JSON.parse(localStorage.getItem("storeProducts"))
  : [];

// let textUtils = [{
//   id: textUtils.length + 1,
//   tweet,
// }];

function receiveInput() {
  // console.log(typeof resetInput);
  const text = textInputElm.value;
  return text;
}
function resetInput() {
  textInputElm.value = "";
}

function addText(tweet) {
  const textItem = {
    id: textUtils.length + 1,
    tweet,
  };
  textUtils.push(textItem);
  return textItem;
}
function validateInputs(tweet) {
  let isValid = true;
  if (tweet === "") {
    showMessage("input valid data", primary);
    isValid = false;
  }
  // return isValid;
}
// console.log(typeof textItem);
// console.log(typeof textUtils);

function showProductTOUI(textItemInformation) {
  // console.log(textItemInformation);
  const { id, tweet } = textItemInformation;
  const elm = `<li
              class="list-group-item collection-item d-flex flex-row justify-content-between"  
              data-productId="${id}"
            >
              <div class="product-info">
                <strong>${tweet}</strong>- <span class="price"></span>  
              </div>
              <div class="action-btn">
              <i class="fa-solid fa-trash-xmark"></i>
                <i class="fa fa-trash-alt delete-product"></i>
              </div>
            </li>`;

  collectionElm.insertAdjacentHTML("afterbegin", elm);
}

// function addTextTOStorage(texts) {
//   //   let texts;
//   if (localStorage.getItem("storeProducts")) {
//     textUtils = JSON.parse(localStorage.getItem("storeProducts"));
//     textUtils.push(item);
//   } else {
//     textUtils.push(item);
//     localStorage.setItem("storeProducts", JSON.stringify(texts));
//   }
// }
function clearMessage() {
  msgElm.textContent = "";
}
function showMessage(msg, action = "success") {
  const textMsg = `<div class="alert alert-${action}" role="alert">
    ${msg}
   </div>`;
  msgElm.insertAdjacentHTML("afterbegin", textMsg); //html string to show in browser,so it should use
  setTimeout(() => {
    clearMessage();
  }, 2000);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  const text = receiveInput();
  console.log(text);

  resetInput();
  // if (!isValid) return;
  showProductTOUI("textItem");
  validateInputs("textItem");

  showMessage("input valid information");
  // console.log(textItem, typeof textItem);
  const textItem = addText("tweet");
  //   addTextTOStorage("tweet");
}

form.addEventListener("submit", handleFormSubmit);
