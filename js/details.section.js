import { Ui } from "./ui.section.js";


export class Details{
    constructor(id){
        document.getElementById("btnClose").addEventListener("click", ()=>{
            document.getElementById("details").classList.add("d-none");
            document.getElementById("games").classList.remove("d-none");
        });

        this.loading = document.querySelector(".loading");

        this.getDetails(id);
    };

    async getDetails(id){
        this.loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6ef8708c8cmshba17b1318acc0f9p1741a4jsn2d8864c55d17',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await api.json();
        this.loading.classList.add("d-none");
        console.log(response);
        new Ui().displayDetails(response);

    }
}