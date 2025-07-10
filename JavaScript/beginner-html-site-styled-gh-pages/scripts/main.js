const firefoxImage = document.querySelector("img");

firefoxImage.addEventListener("click", () => {
    const mySrc = firefoxImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        firefoxImage.setAttribute("src", "images/firefox2.png");
    } else {
        firefoxImage.setAttribute("src", "images/firefox-icon.png");
    }
});