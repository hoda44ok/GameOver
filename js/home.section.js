import { Details } from "./details.section.js";
import { Ui } from "./ui.section.js";


export class Home {
    constructor() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.changeActive(link);
                const category = link.getAttribute('data-category');
                this.getGames(category);

            });
        });

        this.loading = document.querySelector(".loading");
        this.details = document.getElementById("details");
        this.games = document.getElementById("games");
        this.ui = new Ui();
        this.detailsSection = new Details();
        this.getGames("mmorpg");
    }


      changeActive(link) {
        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active");       
    }




    async getGames(cat) {
        this.loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6ef8708c8cmshba17b1318acc0f9p1741a4jsn2d8864c55d17',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        const response = await api.json();
        this.loading.classList.add("d-none");
        console.log(response);  
        this.ui.displayGames(response);


        document.querySelectorAll(".card").forEach(card =>{
            card.addEventListener("click",() =>{
               this.details.classList.remove("d-none");
               this.games.classList.add("d-none");
               new Details(card.getAttribute('data-id'));
            });
        });
       
    }



}

