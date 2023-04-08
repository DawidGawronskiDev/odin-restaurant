import Logo from "../assets/images/logo.svg";
const startPage = () => {
  const component = content.querySelector("section");
  component.classList = "start-section";

  component.innerHTML = "";

  const textContainer = document.createElement("div");
  textContainer.classList = "text-container";
  component.appendChild(textContainer);

  const textSub = document.createElement("span");
  textSub.classList = "text-sub";
  textSub.innerHTML = "kozmin wielkopolski";
  textContainer.appendChild(textSub);

  const textMain = document.createElement("span");
  textMain.classList = "text-main";
  textMain.innerHTML = "La Strada";
  textContainer.appendChild(textMain);

  const textPar = document.createElement("span");
  textPar.classList = "text-par";
  textPar.innerHTML =
    "Twoja ulubiona pizza tylko u nas - zawsze z najlepszych składników";
  textContainer.appendChild(textPar);

  const menuBtn = document.createElement("button");
  menuBtn.id = "menuBtn";
  menuBtn.innerHTML = "Menu";
  textContainer.appendChild(menuBtn);

  const logo = new Image();
  logo.src = Logo;
  logo.alt = "La Strada Logo";
  component.appendChild(logo);
};

export default startPage;
