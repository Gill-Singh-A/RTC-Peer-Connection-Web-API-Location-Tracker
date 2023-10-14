const apiKey = "YOUR_API_KEY";
const getLocation = async(ip) => {
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
    await fetch(url).then((response) =>
        response.json().then((json) => {
            const output = `
                ---------------------------------
                Country    = ${json.country_name}
                State      = ${json.state_prov}
                City       = ${json.city}
                District   = ${json.district}
                Lat / Long = ${json.latitude} / ${json.longitude}
                ---------------------------------
            `
            console.log(ip);
            console.log(output);
        })
    );
};