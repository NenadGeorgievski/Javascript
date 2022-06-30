window.onload = function (){
  let titleArr = document.getElementsByClassName("title");

  for (let i = 0; i < titleArr.length; i++) {
    const element = titleArr[i];
    element.addEventListener("click", myFunction);
    
  }

  function myFunction(){
    if(this.nextElementSibling.classList.contains("active")){
      this.nextElementSibling.classList.remove("active");
    } else {
      this.nextElementSibling.classList.add("active");
    }
  }
}