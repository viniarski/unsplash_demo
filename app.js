const form = document.getElementById("form");
const imagecontainer = document.getElementById("img-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  let query = event.target.input.value;
  search(query);
});

async function search(queryParam) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=LMIpfPZ7y7PH_GClYLw0JwRMTXqiIgSPDC61Xp2sV84`
  );
  console.log(response);
  let data = await response.json();
  
  if (data.results.length > 0) {
    imagecontainer.innerHTML = '';

    data.results.forEach((result) => {
      let img = document.createElement("img");
      img.src = result.urls.raw;
      imagecontainer.appendChild(img);
    });
}

}


