let res = fetch("https://restcountries.com/v2/all");


// let weatherApI ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=219610ccda21539b239b5abd7acc42ee&units=metric';
let getWeather=  (city)=>{
        let API_KEY="219610ccda21539b239b5abd7acc42ee";
        let URL='https://api.openweathermap.org/data/2.5/weather';
        let Full_Url =`${URL}?q=${city}&appid=${API_KEY}&units=metric`;
        let weatherPromise= fetch(Full_Url);
        return weatherPromise.then((response)=>{
            return response.json();
        })

}

function search () {
    let city=document.getElementById('buten').value;

            getWeather(city).then((response)=>{
                console.log(response.name);
                console.log(response.main.temp);

            })
            .catch((err)=>{
                console.log(err);
            })
    }

res.then((data) => data.json()).then((data1) => {

  let rows = document.getElementById("rows")

  for (var i = 0; i < data1.length; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "col-lg-3 col-md-4 col-sm-12")
    div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">${data1[i].name}</div>
        <img src="${data1[i].flag}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Capital:</h5>
          <h5 class="card-title">Region:${data1[i].region}</h5>
          <h5 class="card-title">Sub Region:${data1[i].subregion}</h5>
          <button class="btn btn-primary" id="buten" onclick="search()" value="${data1[i].name}" >  Weather</button>
        </div>
      </div>`
    rows.append(div)

    
  }
  // search(data1[i].name)
});