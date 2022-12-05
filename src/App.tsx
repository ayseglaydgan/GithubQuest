import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { exampleUser } from './Data/exampleData'


function App() {

  return (
    <div>
      <h1>React App</h1>
      <div>
        name: {exampleUser.userName}
      </div>
      <div>
        email: {exampleUser.email}
      </div>
      <div>
        avatarUrl: <img src='https://avatars.githubusercontent.com/u/54666425?v=4'></img>
      </div>
      <div>
        followers: {exampleUser.followers}
      </div>
      <div>
        following: {exampleUser.following}
      </div>
      <div>
        repoName: {exampleUser.repos[0].repoName}
      </div>
    </div>
  )
}

export default App
