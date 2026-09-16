const begin = document.getElementById("begin");

if (begin) {
  begin.addEventListener("click", function () {
    console.log("clicked");
  });
}

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

images.forEach((img) => {
    if (img.src.includes("1.jpg")) {
        img.addEventListener("click", () => {
            window.location.href = "correct.html";
        });
    } else if (img.src.includes("1dist.png")) {
        img.addEventListener("click", () => {
            window.location.href = "incorrect.html";
        });
       }   });
