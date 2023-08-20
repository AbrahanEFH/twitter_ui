// import './App.css' se puede importar aqui directamente o en el main.jsx

import { TwitterFollowCard } from "./TwitterFollowCard"

function App () {
    return (
      <div className="App"> 
      <TwitterFollowCard isFollowing userName="Abrahanfrias" > 
      <h2>Abrahan Frias</h2>
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="Cristiano">
      <h2>Cr7</h2>
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="vinijr">
        <h2>vinijr</h2>
      </TwitterFollowCard>
      </div>
    )
}

export default App