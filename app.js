

let parent = document.getElementById("parent");
let result = document.getElementById("result");
let body = document.body; // Yeh aapke code mein declare nahi tha

// User se input lekar lowercase mein badalna
let season = prompt("Which season do you like most?");

if (season) {
    season = season.toLowerCase().trim();
}

let title = document.getElementById("title");

let heading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");
let button = document.getElementById("button");
button.style.display = "inline-block";
if (season === "summer") {
    body.style.backgroundImage = "url('background img.webp')";
    title.innerHTML = " SUMMER";
    heading.innerHTML = "Enjoy the Summer Season";
    paragraph.innerHTML = "Summer is the perfect time to enjoy sunshine, beaches, cool drinks and outdoor adventures.";
    button.innerHTML="enjoy summer"
    parent.innerHTML = `
    <div class="card">
        <img src="summer card.webp" alt="Summer Image">
    </div>
    `;
    button.style.background = "#ff9800";
}

else if (season === "winter") {
    body.style.backgroundImage = "url('background winter.gif')";
    title.innerHTML = " WINTER";
    heading.innerHTML = "Enjoy the Winter Season";
    paragraph.innerHTML = "Winter is the perfect season for snowfall, hot coffee and warm clothes.";
    button.innerHTML="enjoy winter"
    // Yahan shuru mein backtick (`) miss tha
    parent.innerHTML = `
    <div class="card">
        <img src="card winter.gif" alt="winter Image">
    </div>
    `;
    button.style.background = "#2196f3";
}

else if (season === "spring") {
    body.style.backgroundImage = "url('spring background.gif')";
    title.innerHTML = "🌸 SPRING";
    heading.innerHTML = "Welcome Spring";
    paragraph.innerHTML = "Spring brings colorful flowers, green trees and fresh weather.";
    button.innerHTML="enjoy spring"
    // Yahan bhi backtick miss tha
    parent.innerHTML = `
    <div class="card">
        <img src="card spring.webp" alt="spring Image">
    </div>
    `;
    button.style.background = "#4caf50";
}

else if (season === "autem" || season === "autumn") {
    body.style.backgroundImage = "url('background autem.gif')";
    title.innerHTML = "🍂 AUTEM";
    heading.innerHTML = "Autwm Season";
    paragraph.innerHTML = "Autem is famous for beautiful orange leaves and cool breezes.";
    button.innerHTML="enjoy autem"
    parent.innerHTML = `
    <div class="card">
        <img src="autem card.gif" alt="autem Image">
    </div>
    `;
    button.style.background = "#8d6e63";
}

else if (season === "rainy") {
    body.style.backgroundImage = "url('rainy background.gif')";
    title.innerHTML = "🌧 RAINY";
    heading.innerHTML = "Enjoy Rainy Season"; // Yeh heading aapki miss thi
    paragraph.innerHTML = "Rainy season brings fresh air, green nature and beautiful rain.";
    button.innerHTML="enjoy rainy"
    parent.innerHTML = `
    <div class="card">
        <img src="rainy card.gif" alt="Summer Image">
    </div>
    `;
    button.style.background = "#3f51b5";
}

else {
    alert("Please Enter a Valid Season!");
    
}


