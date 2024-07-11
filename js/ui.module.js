 export class Ui{
  constructor(){};

  dispaly(data){
    
    let box =``
  for (let i =0 ; i< data.length ; i++) {


    box+=`        <div class="col text-white">
                        <div data-id="${data[i].id}" class="card h-100 bg-transparent text-white" role="button">
                            <div class="card-body">
                                <figure>
                                    <div class="layer1">
                                    <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100" alt="imageGames">
                                     <div class="layer"></div>
                                    </div>
                                </figure>
                                <figure>
                                    <div class="hstack justify-content-between">
                                        <h3 class="h6 small">${data[i].title}</h3>
                                        <span class="badge text-bg-primary p-2">free</span>
                                    </div>
                                    <p class="card-text text-center small opacity-50">${data[i].short_description.split(' ',8)}</p>
                                </figure>
                            </div>
                            <footer class="card-footer small hstack justify-content-between">
                                <span class="badge badge-color">${data[i].genre}</span>
                                <span class="badge badge-color">${data[i].platform}</span>
                            </footer>
                        </div>
                    </div>`
  };

  document.getElementById('gameData').innerHTML= box

  };



dispalyDetails(data){
   let detailsBox =` <div class="col-lg-4">
               <img src="${data.thumbnail}" alt="gamesImage">
            </div>
            <div class="col-lg-8">
               <h3>${data.title}</h3>
               <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
               <p>platform: <span class="badge text-bg-info">${data.platform}</span></p>
               <p>status: <span class="badge text-bg-info">${data.status}</span></p>
               <p> class="small" ${data.description}</p>
               <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning">show Games</a>
            </div>`

            document.getElementById('detailsContent').innerHTML=detailsBox
}


};