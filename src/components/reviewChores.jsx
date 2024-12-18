import { useEffect, useState } from "react";
import { getChores } from "../Services/AppServices";

function ReviewChores(){

    const [chores, setChores] = useState([]);

    useEffect(()=>{

        const fetchChores = async () =>{

            try{
                const choreData = await getChores();
                setChores(choreData); 
                
                console.log("Data from Chores table fetched!!");
                

            }catch (error){
                console.error("Error fetching chores:", error); 
            }
        };

        fetchChores();

    }, []);

    return (
        <div>
          <h2>Chore List</h2>
          {chores.length > 0 ? (
            <ul>
            {chores.map((chore, index) => (
              <li key={index}>
                <strong>{chore.chor_Name}</strong>
              </li>
            ))}
          </ul>
          ) : (
            <p>Loading chores...</p>
          )}
        </div>
      );
      

}

export default ReviewChores;