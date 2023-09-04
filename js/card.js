const card = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();

  displayCardData(data.data);
};

displayCardData = (cardData) => {
  //1) Where to add
  console.log(cardData.length);
  if (cardData.length == 0) {
    const hide = document.getElementById("hide");
    hide.classList.add("hidden");

    const noData = document.getElementById("no-data");
    noData.classList.remove("hidden");
  } else {
    const hide = document.getElementById("hide");
    hide.classList.remove("hidden");
    const noData = document.getElementById("no-data");

    noData.classList.add("hidden");

    const cardDisplay = document.getElementById("card-display");

    cardDisplay.innerHTML = "";
    cardData.forEach((data) => {
      const postedDateSec = data.others.posted_date;

      const time = Math.floor(postedDateSec / 60);
      // console.log(time);

      const hour = Math.floor(time / 60);
      // console.log(hour);

      const min = Math.floor(time % 60);
      // console.log(min);

      const duration = `${hour} hr ${min} min ago`;
      // console.log(duration);
      //2) What to add

      const displayCard = document.createElement("div");

      displayCard.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img class="h-[220px] w-[410px]" src="${data.thumbnail}" />
          <h2 class="absolute bg-[#f76c6c] right-7 lg:right-16 bottom-1 mb-[166px] mr-[200px] px-1 rounded-sm text-xs text-[#FFFFFF]">${
            postedDateSec ? duration : ""
          }</h2>
        </figure>
        <div class="card-body">
          <div class="flex gap-4">
         <img class="rounded-full w-12 h-12" src="${
           data.authors[0].profile_picture
         }" alt="" /> 
           
            <h2 class="card-title">${data.title}</h2>
          </div>
          <div class="flex gap">
          <span>${data.authors[0].profile_name}</span>
            <span>${
              data.authors[0].verified
                ? `<img class="w-4 h-4" src="./imgs/fi_10629607.png" alt="">`
                : ""
            }</span>
          </div>
          <p>${data.others.views}</p>
        </div>
      </div>
    `;

      cardDisplay.appendChild(displayCard);
    });
  }
};

card(1000); // Calling the card function
