import PizzaIcon from "../assets/images/pizza-icon.svg";

const menuPage = () => {
  const component = content.querySelector("section");
  component.classList = "menu-section";

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

  const menuContainer = document.createElement("li");
  menuContainer.classList = "menu-container";
  component.appendChild(menuContainer);

  const menuArr = [
    {
      name: "Margarita",
      ingredients: "sos pomidorowy, ser, przyprawy",
    },
    {
      name: "Prowansalska",
      ingredients: "sos pomidorowy, ser, pieczarki, przyprawy",
    },
    {
      name: "Królewska",
      ingredients: "sos pomidorowy, ser, pieczarki, szynka, przyprawy",
    },
  ];

  menuArr.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.innerHTML = `
        <img src="${PizzaIcon}">
        <span class="menu-title">${item.name}</span>
        <span class="menu-ingredients">${item.ingredients}</span>
    `;

    menuContainer.appendChild(menuItem);
  });
};

export default menuPage;
