//your JS code here. If required.
const browserName = navigator.appName;
const version = navigator.appVersion;
const divElement = document.getElementById("browser-info");
const para = document.createElement("p");
para.innerText = "You are using " + browserName + "version " + version;
divElement.appendChild(para);
