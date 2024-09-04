// SELECT ALL FILTER BUTTONS AND FILTERABLE CARDS
const filterButtons =document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// DEFINE THE FILTERCARDS FUNCTION
const filterCards =e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");


    // ITERATE OVER EACH FILTERABLE CARD
    filterableCards.forEach(card=>{
        //add hide class to hide the card initially
        card.classList.add("hide");
        // Check if the card matches the selected filter or "all is selected"
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name==="all"){
            card.classList.remove("hide")
        }
    })

};

// ADD CLICK EVENT LISTENER TO EACH FILTER

filterButtons.forEach(button => button.addEventListener("click",filterCards));


