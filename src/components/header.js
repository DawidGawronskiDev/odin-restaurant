import Logo from "../assets/images/logo.svg";

const headerComponent = () => {
  const component = document.createElement("header");
  component.classList = "header";

  const logo = new Image();
  logo.src = Logo;
  logo.alt = "La Strada Logo";
  component.appendChild(logo);

  const nav = document.createElement("nav");
  component.appendChild(nav);

  const navLinks = document.createElement("ul");
  navLinks.classList = "nav-links";
  nav.appendChild(navLinks);

  const navLinksArr = [
    {
      name: "Start",
      id: "start",
    },
    {
      name: "Menu",
      id: "menu",
    },
    {
      name: "O nas",
      id: "onas",
    },
    {
      name: "Kontakt",
      id: "contact",
    },
  ];

  navLinksArr.forEach((item) => {
    const navLink = document.createElement("li");
    navLink.id = item.id;
    navLink.innerHTML = `${item.name}`;
    navLinks.appendChild(navLink);
  });

  return component;
};

export default headerComponent;
