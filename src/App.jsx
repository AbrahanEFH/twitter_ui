// import './App.css' se puede importar aqui directamente o en el main.jsx

import { TwitterFollowCard } from "./TwitterFollowCard"

function App () {
  const formatUserName = (userName) => `@${userName}`

    return (
      <div className="App"> 
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="Abrahanfrias" name="Abrahan Frias" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="Cristiano" name="CR7" />
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="vinijr" name="Vinicius" />
      </div>
    )
  
}

export default App