const loadCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`).then(res => res.json())
    .then(data => showData(data))
}
loadCountries();

const showData = countries => {
    const country = document.getElementById('countries');
  const  countriesHtml = countries.map(country => getCountries(country));   
     country.innerHTML = countriesHtml.join(' ')
}

const getCountries = country => {
    return ` <div class="country">
                 <h3>Country Name: <span class="name"> ${country.name} </span> </h3>
                 <h3> Capital : <span class="name"> ${country.capital} </span>  </h3>
                 <img src= "${country.flag}" width="300px">
            </div>`;
}