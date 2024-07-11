import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";



export class Home {
    
    constructor(){
        document.querySelectorAll('.nav-link ').forEach((link) =>{
            link.addEventListener('click',()=>{
               this.changeLink(link);
               const category=link.dataset.category;

               this.getGames(category);;


            });
            });

            this.loading=document.querySelector('.loading');

           this.details = document.getElementById('details');
           this.page=document.getElementById('page');
    
        this.Ui =new Ui()
       
        this.getGames("MMORPG");

    };

        

async changeLink(link){
    document.querySelector('.navbar-nav .active').classList.remove('active');
    link.classList.add('active');

}

    
async getGames(getApi){

    this.loading.classList.remove('d-none')
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6288d3c1c8mshff0cc79c372a7a6p18d08cjsn48cdfdf63898',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        }};

     const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${getApi}`, options);
     const res =await api.json();
     this.loading.classList.add('d-none')

    //   console.log(res);
      this.Ui.dispaly(res);

      document.querySelectorAll('.card').forEach(card=>{
        card.addEventListener('click',()=>{
            this.details.classList.remove('d-none');
            this.page.classList.add('d-none');
           new Details(card.dataset.id)
                
              

        });
      });
      

      

 }

};


