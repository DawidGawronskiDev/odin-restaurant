import "./style.css";

import headerComponent from "./components/header";
import sectionComponent from "./components/section";
import footerComponent from "./components/footer";

import startPage from "./pages/start";
import menuPage from "./pages/menu";
import onasPage from "./pages/onas";
import contactPage from "./pages/contact";

const content = document.querySelector("#content");

content.appendChild(headerComponent());
content.appendChild(sectionComponent());
content.appendChild(footerComponent());
startPage();

document.querySelector("#start").addEventListener("click", startPage);
document.querySelector("#menu").addEventListener("click", menuPage);
document.querySelector("#menuBtn").addEventListener("click", menuPage);
document.querySelector("#onas").addEventListener("click", onasPage);
document.querySelector("#contact").addEventListener("click", contactPage);
