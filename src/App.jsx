// import './App.css' se puede importar aqui directamente o en el main.jsx

import { TwitterFollowCard } from "./TwitterFollowCard"

function App () {
    return (
      <div className="App"> 
      <TwitterFollowCard  userName="Abrahanfrias" > 
      <h2>Abrahan Frias</h2>
      </TwitterFollowCard>

      <TwitterFollowCard  userName="Cristiano">
      <h2>Cr7</h2>
      </TwitterFollowCard>

      <TwitterFollowCard  userName="vinijr">
        <h2>vinijr</h2>
      </TwitterFollowCard>
      </div>
    )
}

export default App