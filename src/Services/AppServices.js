
// base api 
const API_BASE_URL = "http://localhost:8080/choretracker";


// fetching chores from databse
export const  getChores = async () =>{
    try{
        const response = await fetch(`${API_BASE_URL}/chores`);
        if(!response.ok){
            throw new Error('Network response was not okay!');
        }

        return response.json();
    }catch(error){
        console.log('Error Fetching chores:', error);
        throw error;
    }
};

