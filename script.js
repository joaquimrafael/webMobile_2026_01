function saveToLocalStorage(newData) {
  try {
    const currentData = JSON.parse(localStorage.getItem("messages")) || [];
    currentData.push(newData);
    localStorage.setItem("messages", JSON.stringify(currentData));
  } catch (err) {
    console.error("Erro ao salvar no localStorage: ", err);
  }
}

function moveCarousel(direction) {
  const imagesList = document.getElementsByClassName("carrousel-list")[0];

  const elements = imagesList.getElementsByTagName("li");

  let currIndex = Array.from(elements).findIndex((el) => el.id === "visible");
  elements[currIndex].removeAttribute("id");
  elements[(currIndex + direction + elements.length) % elements.length].id =
    "visible";
}

function carrouselLeftClick() {
  moveCarousel(-1);
}

function carrouselRightClick() {
  moveCarousel(1);
}

function sendMessage(event) {
  event.preventDefault();

  const form = document.getElementById("contact-form");

  const fullName = form.querySelector("#full-name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const phone = form.querySelector("#phone").value.trim();
  const message = form.querySelector("#message").value.trim();

  const newData = {
    name: fullName,
    email: email,
    phone: phone,
    message: message,
  };

  saveToLocalStorage(newData);

  window.alert(
    `Obrigado pela mensagem, ${fullName}! Em breve, entraremos em contato por e-mail ou telefone!`,
  );

  form.reset();
}
