import { exampleUser } from "../Data/exampleData"
import React, { useState, useEffect } from 'react'
import './ProfileInfos.css'
import axios from 'axios'
import { Octokit } from "octokit"

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

    const octokit = new Octokit({
        auth: '<YOUR TOKEN HERE>'
    })
    const [user, setUser] = useState(exampleUser)
    useEffect(() => {
        const fetchUser = async () => {
            const response = await octokit.request('GET /users/{username}', {
                username: 'ayseglaydgan'
            })
            console.log(response)
            setUser(response.data as any)
        }
        fetchUser()
    }, [])


    return (
        <div>
            <div className='avatar'>
                <img className='profile-pic' src={user.avatar_url}></img>
            </div>
            <div className='text-infos'>
                <TextInfo id='user-name' icon='fa-user' text={user.name} />
                <TextInfo id='email' icon='fa-envelope' text={user.email} />
                <TextInfo id='followers' icon='fa-users' text={`${user.followers} followers`} />
                <TextInfo id='following' icon='fa-circle' text={`${user.following} following`} />
                <TextInfo id='repositories' icon='fa-code-fork' text={`${user.public_repos} repositories`} />
            </div>
        </div>

    )
}

const ProfileInfos = () => {
    return (
        <div className="personal-infos">
            <TextInfos />
        </div>
    )
}

export default ProfileInfos

