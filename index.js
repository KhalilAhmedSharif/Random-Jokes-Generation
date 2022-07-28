const jokes = document.getElementById("joke");
const btn = document.querySelector('.btn');


const generateJokes = async () => {
    // Using Promises

    // fetch('https://icanhazdadjoke.com', setHeader)
    // .then((res) => res.json())
    // .then((data) => {
    //     jokes.innerHTML = data.joke;
    // }).catch((error)=> {
    //     console.log(error)
    // })
    

    // Using Async / Await
    try{
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch (error){
        console.log(`The Error is: ${error}`);
    }
}
btn.addEventListener('click', generateJokes);

generateJokes();