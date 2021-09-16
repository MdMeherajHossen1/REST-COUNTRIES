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
                 <h2>Country Name: ${country.name} </h2>
                 <h4> Capital : ${country.capital} </h4>
                 <img src= "${country.flag}" width="300px">
            </div>`;
}