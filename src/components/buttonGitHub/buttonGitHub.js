import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ButtonGitHub()
{
    return (
        <button id="github" class="rounded-md font-bold hover:bg-neutral-800" style={{width:"40px", height:"40px"}}>
            <FontAwesomeIcon icon={faGithub}/>
        </button>
    )
}