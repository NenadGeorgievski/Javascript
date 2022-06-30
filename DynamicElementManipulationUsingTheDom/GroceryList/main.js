let addNeed = document.getElementById("addNeed");
let addHave = document.getElementById("addHave");
let itemInput = document.getElementById("itemInput");
let needList = document.getElementById("needList");
let haveList = document.getElementById("haveList");

addNeed.addEventListener("click", addNeedItem);
addHave.addEventListener("click", addHaveItem);

function addNeedItem(event){
  event.preventDefault();
  console.log(itemInput.value);
  let userInput = itemInput.value;
  needList.innerHTML += `<li class="row"><input type="checkbox" name="item" onclick="switchList(this)" class="col-2 my-auto"><span class="col-6">${userInput}</span><button class="col-1 btn-small btn btn-outline-danger" onclick="deleteItem(this)">X</button></li>`;
  itemInput.value = "";
}

function addHaveItem(event){
  event.preventDefault();
  console.log(itemInput.value);
  let userInput = itemInput.value;
  haveList.innerHTML += `<li class="row"><input type="checkbox" name="item" onclick="switchList(this)" class="col-2 my-auto" checked><span class="col-6">${userInput}</span><button class="col-1 btn btn-small btn-outline-danger" onclick="deleteItem(this)">X</button></li>`;

  itemInput.value = "";

}

function deleteItem(element){
  let listItem = element.parentElement;
  let list = listItem.parentElement;
  list.removeChild(listItem);
  

} 

function switchList(element){

  if(element.checked){
    needList.removeChild(element.parentElement);
    haveList.appendChild(element.parentElement);
  } else {
    haveList.removeChild(element.parentElement);
    needList.appendChild(element.parentElement);
  }
}