import { exampleUser } from "../Data/exampleData"
import './ProfileInfos.css'

interface TextInfoProps {
    id: string,
    icon: string,
    text: string
}

const TextInfo = ({ id, icon, text }: TextInfoProps) => {
    function handleClick() {
        console.log(text)
    }
    // backtick (``) is used to write a string that spans multiple lines
    return (
        <div onClick={handleClick} id={id} className="text-info">
            <div className="icon">
                <i className={`fa fa-solid ${icon}`}></i>
            </div >
            <div>
                <p className="text">{text}</p>
            </div>
        </div>

    )
}

const TextInfos = () => {
    return (
        <div className='text-infos'>
            <TextInfo id='user-name' icon='fa-user' text={exampleUser.userName} />
            <TextInfo id='email' icon='fa-envelope' text={exampleUser.email} />
            <TextInfo id='followers' icon='fa-users' text={`${exampleUser.followers} followers`} />
            <TextInfo id='following' icon='fa-circle' text={`${exampleUser.following} following`} />
            <TextInfo id='repositories' icon='fa-code-fork' text={`${exampleUser.repos.length} repositories`} />
        </div>
    )
}


const Avatar = () => {
    return (
        <div className='avatar'>
            <img className='profile-pic' src='https://avatars.githubusercontent.com/u/54666425?v=4'></img>
        </div>
    )
}


const ProfileInfos = () => {
    return (
        <div className="personal-infos">
            <Avatar />
            <TextInfos />
        </div>
    )
}

export default ProfileInfos

