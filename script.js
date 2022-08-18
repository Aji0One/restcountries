
var container=document.createElement("div");
container.setAttribute("class","container");

var subcontainer=document.createElement("div");
subcontainer.classList.add("subcontainer");

var head=document.createElement("h1");
head.setAttribute("class","text-center");
head.setAttribute("id","title");
head.innerHTML="WEATHER";



document.body.append(head,container);
var row=document.createElement("div");
row.setAttribute("class","row");
row.setAttribute("id","touch");
row.innertext=foo();
container.append(subcontainer,row);



async function foo(){
var res= await fetch("https://restcountries.com/v3.1/all");
var result= await res.json();
result.forEach((ele)=>{
    
  var lat=ele.latlng[0];
  var lng=ele.latlng[1];
   console.log(ele);
    var column=document.createElement("div");
    column.setAttribute("class","col-lg-4 , col-sm-12");
    column.id="column";
    column.innerHTML=`<div class="card" style="width: 18rem;">
    
    <div class="card-body">
      <h5 class="card-title">${ele.name.common}</h5>
    </div>
    
    <img src=${ele.flags.png} class="card-img-top" alt="...">
    
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Capital: ${ele.capital}</li>
      <li class="list-group-item">Country Code: ${ele.cca3}</li>
      <li class="list-group-item">Region: ${ele.region}</li>
      <li class="list-group-item">Latitude: ${lat}</li>
      <li class="list-group-item">Longitude: ${lng}</li>
    </ul>
    
    <!-- Button trigger modal -->
<button onclick="weather(${lat},${lng})" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  ClickMe for Weather Info
</button>


      </div>`;

      row.append(column);

})
}

   
async function weather(lat,lng){
  var wea= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=72fe32f030e9f684203de50f055a9ca2`);
  var wea1=await wea.json();
  console.log (wea1);
        
      var weatherblock=document.createElement("div");
      weatherblock.innerHTML= `<!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Weather Report</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul class="modal-group modal-group-flush">
                  <li class="modal-group-item">Humidity: ${wea1.main.humidity}</li>
                  <li class="modal-group-item">Pressure: ${wea1.main.pressure}</li>
                  <li class="modal-group-item">Sea_Level: ${wea1.main.sea_level}</li>
                  <li class="modal-group-item">Temperature: ${wea1.main.temp}</li>
                  <li class="modal-group-item">Wind_Speed: ${wea1.wind.speed}</li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`;

      subcontainer.append(weatherblock);

      }