function update(animation = "rotate") {
  const el = document.getElementById("example-element");
  /* Restart the animation
          https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips */
  el.className = "";
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      el.className = animation;
    });
  });

  const transformOrigin = getComputedStyle(el).transformOrigin;
  const pos = transformOrigin.split(/\s+/);
  crosshair.style.left = `calc(${pos[0]} - 12px)`;
  crosshair.style.top = `calc(${pos[1]} - 12px)`;
}

const crosshair = document.getElementById("crosshair");
update();
crosshair.style.opacity = "1";

window.addEventListener("message", ({ data }) => {
  if (data.typ === "choice") {
    update(data.code.includes("3D rotation") ? "rotate3d" : "rotate");
  }
});