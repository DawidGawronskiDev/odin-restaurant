import LocationIcon from "../assets/images/location-icon.svg";
import PhoneIcon from "../assets/images/phone-icon.svg";

const contactPage = () => {
  const component = content.querySelector("section");
  component.classList = "contact-section";

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

  const location = document.createElement("iframe");
  location.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.92349687641!2d17.452520315781722!3d51.82582797968874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470539550a58675d%3A0x4413927299873393!2sLa-Strada.%20Pizzeria!5e0!3m2!1sen!2suk!4v1680969790831!5m2!1sen!2suk";
  location.allowFullscreen = "";
  location.referrerPolicy = "no-referrer-when-downgrade";
  component.appendChild(location);

  const contactContainer = document.createElement("ul");
  contactContainer.classList = "contact-container";
  component.appendChild(contactContainer);

  contactContainer.innerHTML = `
    <li><img src="${LocationIcon}">Przyjemskich 22, 63-720 Koźmin Wielkopolski</li>
    <li><img src="${PhoneIcon}">62 721 08 66</li>
  `;

  component.appendChild(contactContainer);
};

export default contactPage;
