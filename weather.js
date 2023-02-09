function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='84d32cdf3d4ce7e7670e2f90d75394b5';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city + '&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then(data=>{
        var t=data['main']['temp'];
         document.getElementById("output").innerHTML=t;
    })
}