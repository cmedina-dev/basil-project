function getUniqueNumberForDay(totalPictures, date = new Date()) {
    const dayOfMonth = date.getDate();
    return (dayOfMonth - 1) % totalPictures;
}

function refresh() {
    const previousImage = display.getAttribute("src");
    let randomImage = "img/b" + Math.floor(1 + Math.random() * 45).toString() + ".webp";
    while (randomImage === previousImage) {
        randomImage = "img/b" + Math.floor(1 + Math.random() * 45).toString() + ".webp";
    }

    display.setAttribute("src", randomImage);
    console.log(randomImage);
}

const display = document.getElementById("basilDisplay");
display.setAttribute("src", "img/b" + getUniqueNumberForDay(45).toString() + ".webp");
const refreshButton = document.getElementById("refreshButton");
refreshButton.onclick = refresh;