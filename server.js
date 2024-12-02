const fetchData = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!response.ok){
            throw new Error("Data fetching error");
        }

        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
        console.log(error);
    }
}
fetchData()