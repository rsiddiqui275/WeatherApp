const API_KEY = "a5716569db0057ccef7a9b74c1f937b4";

const fetchData = async (payload) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}&units=metric`);
    const data = res.json();
    if (res.status === 404) {
        window.alert("Please enter valide Country Name");
    }
    try {
        return data;
    }
    catch (e) {
        console.log(e);
    }
}

export default fetchData;
