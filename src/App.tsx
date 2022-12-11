import './App.css'
import GithubQuestWrapper from './Components/GithubQuestWrapper'
import ProfileInfos from './Components/ProfileInfos'
import RepoDisplay from './Components/RepoDisplay'
import { exampleUser } from './Data/exampleData'


// MY TOKEN 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


function App() {

  return (
    <div className='document'>
      <head className='symbol-link'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <h1 className='head'>GitHub</h1>
      <GithubQuestWrapper>
        <ProfileInfos />
        <GithubQuestWrapper isColumn={true}>

          <RepoDisplay title='Overview' RepoArray={exampleUser.repos} />
          <RepoDisplay title='Others' RepoArray={exampleUser.repos} />

        </GithubQuestWrapper>
      </GithubQuestWrapper>
    </div>
  )
}




export default App
