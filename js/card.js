const card = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();

  displayCardData(data.data);
};

displayCardData = (cardData) => {
  //1) Where to add
  const cardDisplay = document.getElementById("card-display");
  cardDisplay.innerHTML = "";
  cardData.forEach((data) => {
    //2) What to add

    const displayCard = document.createElement("div");

    displayCard.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img class="h-[220px] w-[410px]" src="${data.thumbnail}" />
        </figure>
        <div class="card-body">
          <div class="flex gap-4">
         <img class="rounded-full w-12 h-12" src="${data.authors[0].profile_picture}" alt="" /> 
           
            <h2 class="card-title">${data.title}</h2>
          </div>
          <div class="flex gap">
          <span>${data.authors[0].profile_name}</span>
            <span>verifed!</span>
          </div>
          <p>${data.others.views}</p>
        </div>
      </div>
    `;

    cardDisplay.appendChild(displayCard);
  });
};

card(); // Calling the card function
