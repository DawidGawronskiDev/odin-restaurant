const onasPage = () => {
  const component = content.querySelector("section");
  component.classList = "onas-section";

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

  const onasText = document.createElement("span");
  onasText.classList = "onas-text";
  onasText.innerHTML =
    "Doskonale wiemy jak ważny jest proces przygotowania jedzenia, to w nim kryje się tajemnica smaku, dlatego w naszej restauracji robimy wszystko od podstaw i kurczowo trzymamy się każdego etapu. Codziennie sami przygotowujemy wszystkie składniki do naszych potraw, które są podawane zaraz po przyrządzeniu. Doskonale wiemy, że aby potrawy były smaczne i aromatyczne, to ważna jest świeżość i jakość produktów. Dlatego postawiliśmy na lokalnych dostawców, których mamy sprawdzonych od lat i wiemy, że dostarczają nam wysokiej klasy składniki.";
  component.appendChild(onasText);
};

export default onasPage;
