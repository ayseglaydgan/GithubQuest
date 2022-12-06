import './App.css'
import ProfileInfos from './Components/ProfileInfos'


function App() {

  return (
    <div className='document'>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <h1 className='head'>GitHub</h1>
      <ProfileInfos />
      <div className='repositories'>
        <button className='repo-btn'>Repositories</button>
      </div>
    </div>
  )
}

export default App
