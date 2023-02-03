import { useState, useEffect } from "react";
import ChampionList from "./components/ChampionsList";
import Team from "./components/Team";
import { api } from "./services/api";
import { StyledContainer } from "./styles/grid";

/* use map para editar um item de uma lista
 const newTeam = team.map(champion => {
          if(champion.id === currentChampion.id){
            return { ...champion, qty: champion.qty + 1, name: "Rudival"}
          } else {
            return champion;
          }
         })
*/

function App() {
   const localStorageTeam = localStorage.getItem("@LOLTEAM");
   const [championsList, setChampionsList] = useState([]);
   const [team, setTeam] = useState(localStorageTeam ? JSON.parse(localStorageTeam) : []);

   //onMount
   useEffect(() => {
      async function loadChampionsData() {
         try {
            const response = await api.get("champion.json");
            const currentData = response.data.data;
            // as vezes você vai precisar trabalhar os dados para que eles fiquem adequados ao seu uso
            const covertData = Object.keys(currentData).map((key) => currentData[key]);
            setChampionsList(covertData);
         } catch (error) {
            console.log(error);
         }
      }
      loadChampionsData();
   }, []);

   //onUpdate
   useEffect(() => {
      localStorage.setItem("@LOLTEAM", JSON.stringify(team));
   }, [team]); // <-- identificar um efeito de atualização

   const addChampionToTeam = (currentChampion) => {   
      if (team.some((champion) => champion.id === currentChampion.id)) {
         alert("O campeão já está no time.")         
      } else if (team.length === 5) {
         alert("O time já está completo!");
      } else {
         setTeam([...team, currentChampion]);
      }
   };

   const removeChampionFromTeam = (currentId) => {
      const newTeam = team.filter((champion) => champion.id !== currentId);
      setTeam(newTeam);
   };

   return (
      <div className="App">
         <StyledContainer>
            <Team team={team} removeChampionFromTeam={removeChampionFromTeam} />
            <ChampionList championsList={championsList} addChampionToTeam={addChampionToTeam} />
         </StyledContainer>
      </div>
   );
}

export default App;
