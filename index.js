
const seeMore = ['New York',
                    'Los Angeles',
                    'Toronto',
                    'Chicago',
                    'Houston',
                    'Brooklyn',
                    'San Diego',
                    'Las Vegas',
                    'San Francisco',
                    'Seattle',
                    'Atlanta',
                    'Queens',
                    'Vancouver, BC',
                    'Miami',
                    'San Antonio',
                    'Tallahassee',
                    'Bend','Kamloops',
                    'Tulsa','Austin',
                    'Salt Lake City',
                    'Jacksonville',
                    'Colorado Springs',
                    'Wilmington',
                    'Birmingham',
                    'New Orleans',
                    'Lexington',
                    'Orlando',
                    'Victoria',
                    'Columbia',
                    'Scottsdale',
                    'Augusta',
                    'Christchurch',
                    'Milwaukee',
                    'Pittsburgh',
                    'Ft. Worth',
                    'Huntsville',
                    'Des Moines',
                    'Quebec City',
                    'All Cities']

const dropDown = document.getElementById("see-more")
const toggleButton = document.getElementById("hide-drop")
const buttonText = document.getElementById("show-more-text")
const toggleIcon = document.getElementById("button-icon")
const topCities = document.getElementById("top-cities")



function findCities(){
    dropDown.innerHTML = ""   
    seeMore.forEach((item, index) =>{
    const li = document.createElement("li")
    li.textContent = item
    if(index >= 15) {
        li.style.display = "none"
    }
    dropDown.appendChild(li)   
});
}
findCities()

topCities.addEventListener('click',findCities)
let showMore = false;

toggleButton.addEventListener("click", () => {
    const items = dropDown.querySelectorAll("li")
    showMore = !showMore;


    items.forEach((li,index) => {
        if (index >= 15){
        li.style.display = showMore ? "list-item" : "none";
        }
    });
    buttonText.textContent = showMore ? "See less" : "See more";
    toggleIcon.classList.toggle("flip-up", showMore);
})
//===================================================================================================================================================================================================================================================================================

const hideDrop = document.getElementById("hide-drop")
const cuisinesText = document.getElementById("show-cuisines")
const cuisinesList = ['Pizza','Chinese Food','Sushi','Cafe','Thai Food','Lunch','Seafood','Indian Food','Dessert','Burgers','Asian Food','Italian Food','Vegan Food','Sandwiches','Restaurants']

cuisinesText.addEventListener("click", () =>{
    dropDown.innerHTML = ""
    hideDrop.style.display = "none"

    cuisinesList.forEach(cuisin =>{
        const li = document.createElement("li");
        li.textContent = cuisin;
        dropDown.appendChild(li);
        
    });
});



//======================================================================================================================================================================================================================================================================
const chainsText = document.getElementById("show-chains")
const chainsList = ["Dunkin'","Wingstop","Wendy's","Popeyes Louisiana Kitchen","Burger King","Walgreens","Chick-fil-A","Subway","Taco Bell","McDonald's","Dollar General","Chipotle Mexican Grill","Starbucks","7-Eleven","Panda Express"]

chainsText.addEventListener("click", () => {
    dropDown.innerHTML = ""
    hideDrop.style.display = "none"
    chainsList.forEach(chains => {
        const li = document.createElement("li");
        li.textContent = chains;
        dropDown.appendChild(li);
    });
});














//============================================================================================================================================================================================================================================================================================================================

const footerText1 = ['Alcohol Australia',
                    'Alcohol Delivery Australia',
                    'Back To School Delivery',
                    'Battle Of The Brands',
                    'Beauty Stores','Beauty Supply',
                    'Catering Near Me',
                    'Chips Ahoy Big Cookie',
                    'Convenience Stores Canada']

const element1 = document.getElementById("footer-text1")

footerText1.forEach(item2 => {
    const li = document.createElement("li")
    li.textContent = item2;
    element1.appendChild(li)
});


//===========================================================================================================================================================================================================================================================================================================================

const footerText2 = ['Dashmart Near Me',
                    'Deck The Doorstep',
                    'Diageo Holiday',
                    'Drugstores Canada',
                    'Flower Delivery',
                    'Grocery Delivery Canada',
                    'Grocery Retail Convenience',
                    'Haleon Well Within Reach',
                    'Halloween']

const element2 = document.getElementById("footer-text2")


footerText2.forEach(item3 =>{
    const li = document.createElement("li")
    li.textContent = item3;
    element2.appendChild(li)
})


//=========================================================================================================================================================================================================================================================================================================================== 


const footerText3 = ['Holiday Hosting',
                    'Hsa Bank', 
                    'Hsa Fsa Store', 
                    'Large Group Orders',
                    'Local Eats Deserve Pepsi', 
                    'Make It Date Night', 
                    'Medicine Delivery', 
                    'Mothers Day', 
                    'Pepsi']

const element3 = document.getElementById("footer-text3")



footerText3.forEach(item3 =>{
    const li = document.createElement("li")
    li.textContent = item3;
    element3.appendChild(li)
});


//===========================================================================================================================================================================================================================================================================================================================



const footerText4 = ['Pet Store Near Me',
                    'Pickleball',
                    'Play For An Ultra',
                    'Procter Gamble',
                    'Retail Stores Near Me',
                    'Seasonal Holidays',
                    'Snap Ebt',
                    'Valentines Day',
                    'Winter Holidays']

const element4 = document.getElementById("footer-text4")



footerText4.forEach(item4 => {
    const li = document.createElement("li")
    li.textContent = item4;
    element4.appendChild(li)
})


//========================================================================================================================================================================================================================================================================================================================================





const footerText5 =['About Us',
                    'Careers',
                    'Investors',
                    'Company Blog',
                    'Engineering Blog',
                    'Merchant Blog',
                    'Gift Cards',
                    'Promotions',
                    'Dasher Central',
                    'LinkedIn',
                    'Glassdoor',
                    'Accessibility',
                    'Newsroom']


const element5 = document.getElementById("footer-second-container")

footerText5.forEach(item5 => {
    const li = document.createElement("li")
    li.textContent = item5;
    element5.appendChild(li)
})


//================================================================================================================================================================================================================================================================================================================================================



const letUsHelp = ['Account Details',
                    'Order History',
                    'Help']

const element6 = document.getElementById("let-us-help-texts")

letUsHelp.forEach(item6 =>{
    const li = document.createElement("li")
    li.textContent = item6
    element6.appendChild(li)
})








const doingBusiness = ['Become a Dasher',
                        'DoorDash Merchant',
                        'Get Dashers for Deliveries',
                        'Get DoorDash for Business',]

const element7 = document.getElementById("doing-business")


doingBusiness.forEach(item7 =>{
    const li = document.createElement("li")
    li.textContent = item7 
    element7.appendChild(li)
})








const navItems = document.querySelectorAll('.nav-item')

if(navItems.length > 0){
    navItems[0].classList.add('selected')
    navItems[0].classList.remove('bottom-nav-headings2')
}

navItems.forEach(item => {
    item.addEventListener('click', () =>{
        navItems.forEach(el => {
            el.classList.remove('selected')
            el.classList.add('bottom-nav-headings2')
        });
        item.classList.remove('bottom-nav-headings2')
        item.classList.add('selected');
    })
})
