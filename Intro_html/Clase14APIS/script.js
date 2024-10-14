async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();

    console.log(data.results[0]);

    const countryElement = document.querySelector(".country");
    const nameElement = document.querySelector(".name");
    const phoneElement = document.querySelector(".phone");
    const pictureElement = document.querySelector(".picture");


    countryElement.innerHTML = data.results[0].location.country;
    nameElement.innerHTML = data.results[0].name.first;
    phoneElement.innerHTML = data.results[0].phone;
    pictureElement.src = data.results[0].picture.large;

    // city.innerHTML = `${data.results[0].location.city}, ${data.results[0].location.country}`;
    //         img.setAttribute("src", `${data.results[0].picture.large}`);
    //         img.setAttribute("alt", `Imagen de ${data.results[0].name.first}`);
}
getRandomUser();