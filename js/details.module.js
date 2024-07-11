import { Ui } from "./ui.module.js";

 export class Details{
    constructor(id){
        document.getElementById('closeBtn').addEventListener('click',()=>{
            document.getElementById('details').classList.add('d-none');
            document.getElementById('page').classList.remove('d-none');
        });
        this.loading=document.querySelector('.loading');
        this.getDetails(id)
    }


async getDetails(id){

    this.loading.classList.remove('d-none')

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6288d3c1c8mshff0cc79c372a7a6p18d08cjsn48cdfdf63898',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
    const respons= await api.json();
    this.loading.classList.add('d-none')

    console.log(respons);

    new Ui().dispalyDetails(respons)
    
}
}

