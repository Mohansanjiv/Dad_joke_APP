const btnE1 = document.getElementById('btn');
const jokeE1= document.getElementById('joke')

const apiKey ='YE6XCH2u7qBMDCXa7MzRKQ==88TqsR6eTEbfLD6x'

const options ={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },  
}

const apiUrl='https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke(){
    try {
        jokeE1.innerText="updating...";
        btnE1.disabled=true;
        btnE1.innerText='Loading'
    
        const response = await fetch(apiUrl, options);
        const data = await response.json();
       
        
        btnE1.disabled=false;
        btnE1.innerText='Tell me a joke'
        
        jokeE1.innerText=data[0].joke;
    } catch (error) {
        jokeE1.innerText="an error happned try again later";
        btnE1.disabled=false;
        btnE1.innerText='Tell me a joke'
      
    }
   

}


btnE1.addEventListener('click',getJoke);