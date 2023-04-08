import githubIcon from "../assets/images/github-icon.svg";

const footerComponent = () => {
  const component = document.createElement("footer");

  const icon = new Image();
  icon.src = githubIcon;
  icon.alt = "";

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/DawidGawronskiDev";
  githubLink.target = "_blank";
  githubLink.appendChild(icon);
  githubLink.innerHTML += `@DawidGawronskiDev`;

  component.appendChild(githubLink);

  return component;
};

export default footerComponent;
