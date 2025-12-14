for (let i = 0; i < 50; i++) {
  const snow = document.createElement("div");
  snow.innerHTML = "❄";
  snow.style.position = "fixed";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.top = Math.random() * -100 + "vh";
  snow.style.fontSize = Math.random() * 20 + 10 + "px";
  snow.style.animation = "fall " + (Math.random() * 5 + 5) + "s linear infinite";
  document.body.appendChild(snow);
}