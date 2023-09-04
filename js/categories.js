const catagory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  displayCatagories(data.data);
};

// This function is for displaying catagory!
const displayCatagories = (datas) => {
  // 1) Where to add!
  const catagoryDisplay = document.getElementById("catagory-display");

  datas.forEach((data) => {
    // Create a card element for each category
    // 2) What to add
    const catagoryCard = document.createElement("div");
    catagoryCard.innerHTML = `
         <button  class="btn">${data.category} </button>
       
        `;

    // 3) AppendChild/ Append the card to the display element
    catagoryDisplay.appendChild(catagoryCard);
    fun(data.category_id);
  });
};

const fun = (rec) => {
  const cataRes = rec;
  card(cataRes);
};
catagory();
