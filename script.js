
var con=document.createElement("div");
con.setAttribute("class","container");

var head=document.createElement("h1");
head.setAttribute("class","text-center");
head.setAttribute("id","title");
head.innerHTML="WEATHER";

con.append(head);
document.body.append(con);
var row=document.createElement("div");
row.setAttribute("class","row");
row.setAttribute("id","touch");
row.innertext=foo();
con.append(row);



async function foo(){
var res= await fetch("https://restcountries.com/v3.1/all");
var result= await res.json();
result.forEach((ele)=>{
    
   console.log(ele);
    var div1=document.createElement("div");
    div1.setAttribute("class","col-lg-4 , col-sm-12");
    var div2=document.createElement("div");
    div2.setAttribute("class","card");
    div2.innerHTML= `<div class="card-body">
      
    <h5 class="card-header" style="text-align:center;">${ele.name.common}</h5>
      
    </div>
    
    <img src="${ele.flags.png}" class="card-img-top" alt="...">
    
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Capital: ${ele.capital}</li>
      <li class="list-group-item">Region: ${ele.region}</li>
      <li class="list-group-item">Code: ${ele.cca3}</li>
    </ul>`
    // <div class="card-body">
    // <!-- Button trigger modal -->
    // <button type="button" class="btn btn-primary" data-toggle="modal" onclick="boo">
    //   Click for Weather 
    //   </button>
    //   </div>`
      var div3=document.createElement("div");
      div3.setAttribute("class","card-body");
      
      var button=document.createElement("button");
      button.setAttribute("type","button");
      button.setAttribute("class","btn btn-primary");
      button.setAttribute("data-toggle","modal");
      button.setAttribute("data-target","staticBackdrop");
      button.innerHTML="Click for Weather";
      button.addEventListener("click",boo);
      div3.append(button);
      div2.append(div3);
   
      async function boo(){
        var wea= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ele.latlng[0]}&lon=${ele.latlng[1]}&appid=72fe32f030e9f684203de50f055a9ca2`);
        var wea1=await wea.json();
        console.log (wea1);
        
      var ptag=document.createElement("p");
      ptag.innerHTML=          
      `<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
       
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${wea1.main.humidity}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
      
      </div>`
        div3.append(ptag);

   }
    div1.append(div2);
  row.append(div1);
    
   })
}
