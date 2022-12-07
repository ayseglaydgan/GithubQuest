import { RepoType } from '../Types/infoTypes'
import './RepoDisplay.css'


const RepoCard = ({ repoName, description, forks, owner, stars, type }: RepoType) => {
    return (
        <div className='repo-card'>
            <p>{repoName}</p>
            <p>{description}</p>
            <p>{forks}</p>
            <p>{owner}</p>
            <p>{stars}</p>
            <p>{type}</p>
        </div>
    )
}


type RepoDisplayProps = {
    title: string,
    RepoArray: RepoType[]
}


const RepoDisplay = ({ title, RepoArray }: RepoDisplayProps) => {
    return (
        <div className='repo-display'>
            <h2>{title}</h2>
            <div className='repo-cards'>
                {RepoArray.map((repo) => {
                    return <RepoCard key={repo.repoName} description={repo.description} forks={repo.forks} owner={repo.owner} repoName={repo.repoName} stars={repo.stars} type={repo.type}
                    />
                })}
            </div>
        </div>
    )
}

export default RepoDisplay