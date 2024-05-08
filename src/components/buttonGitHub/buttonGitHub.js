import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ButtonGitHub()
{
    return (
        <div class="w-9 h-10 rounded-md hover:bg-neutral-800 transition ease-in-out hover:scale-105 duration-200">
            <a class="flex w-9 h-10 justify-center items-center" href="https://www.github.com/ignaciordgz" rel="noreferrer" target="_blank"> 
                <FontAwesomeIcon class="w-6 h-6" id="githubicon" icon={faGithub}/>
            </a>
        </div>
    )
}