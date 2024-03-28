let Country_Info = {
    Pakistan: {
        Punjab: {Lahore: [],Multan: [],Faisalabad: []},
        Sindh: {Karachi: [],Hyderabad: [],Sukkur: []},
        Khyber_Pakhtunkhwa: {Peshawar: [],Abbottabad: [],Swat: []
        }
    },
    India: {
        Uttar_Pradesh: {Lucknow: [],Kanpur: [],Varanasi: []},
        Maharashtra: {Mumbai: [],Pune: [],Nagpur: []},
        Rajasthan: {Jaipur: [],Udaipur: [],Jodhpur: []}
    },
    UK: {
        England: {London: [],Manchester: [],Birmingham: []},
        Scotland: {Edinburgh: [],Glasgow: [],Aberdeen: []},
    }
};

    const selectCountry = document.getElementById('country');
    const selectState = document.getElementById('state');
    const selectCity = document.getElementById('city');
    const selects = document.querySelectorAll('select');

    selectState.disabled = true;
    selectCity.disabled = true;

 
    for(let country in Country_Info){
        selectCountry.options[selectCountry.options.length] = new Option(country, country);
    }

    // This Portion for Country 
    selectCountry.onchange = (e) => {
        selectState.disabled = false;
        selectCity.disabled = true;

        selectState.length = 1;
        selectCity.length = 1;

        for(let state in Country_Info[e.target.value]){
            selectState.options[selectState.options.length] = new Option(state, state);
        }
    };

    //  This portion for state
    selectState.onchange = (e) => {
        selectCity.disabled = false;

        selectCity.length = 1;

        for(let city in Country_Info[selectCountry.value][e.target.value]){
            selectCity.options[selectCity.options.length] = new Option(city, city);
        }
    };
