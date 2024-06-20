function jsToHTML(ele) {
  const div = document.createElement("div");
  const h1 = document.createElement("h2");
  const button = document.createElement("button");
  const img = document.createElement("img");

  img.src = ele.poster;
  img.classList.add("cardimg"); ///creado en scss
  img.alt = ele.title;
  img.value = ele.div;
  img.background = ele.background;
  h1.innerHTML = ele.title;
  button.innerText = "ver ahora";
  div.classList.add("card");

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(button);

  img.addEventListener("mouseenter", (imageSelect) => {
    const background = imageSelect.target.background;
    const body = document.querySelector("body");
    body.style.background = `url${background}`;
  });

  return div;
}
module.exports={
  jsToHTML
}