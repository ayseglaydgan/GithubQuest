import './GithubQuestWrapper.css'

interface GithubQuestWrapperProps {
    children: JSX.Element | JSX.Element[];
    isColumn?: boolean;
}

const GithubQuestWrapper = ({ children, isColumn = false }: GithubQuestWrapperProps) => {
    let className = "";
    if (isColumn) {
        className = "flex-direction-column"
    }
    return (
        <div className={'github-quest-wrapper ' + className} >
            {children}
        </div >
    )
}

export default GithubQuestWrapper