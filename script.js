function carrouselLeftClick() {
  const imagesList = document.getElementsByClassName("carrousel-list")[0];

  const elements = imagesList.getElementsByTagName("li");

  let currIndex = Array.from(elements).findIndex((el) => el.id == "visible");

  elements[currIndex].removeAttribute("id");
  elements[
    (((currIndex - 1) % elements.length) + elements.length) % elements.length
  ].id = "visible";
}

function carrouselRightClick() {
  const imagesList = document.getElementsByClassName("carrousel-list")[0];

  const elements = imagesList.getElementsByTagName("li");

  let currIndex = Array.from(elements).findIndex((el) => el.id == "visible");
  elements[currIndex].removeAttribute("id");
  elements[(currIndex + 1) % elements.length].id = "visible";
}
