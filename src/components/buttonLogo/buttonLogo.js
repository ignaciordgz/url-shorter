import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function ButtonLogo()
{
    return (
        <div class="w-36 h-12 rounded-md hover:bg-neutral-800 hover:scale-105 transition duration-200 ease-in-out">
           <a class="w-36 h-12 space-x-1 pl-2 flex items-center opacity-40 hover:opacity-100" href="/" target='_blank' rel="noreferrer">
                <FontAwesomeIcon class="w-6 h-6" icon={faLink} color="white"/>
                <span class="font-medium font-poppins" style={{width:"6.5rem", fontSize:"1rem", color:"white"}}>url-shorter</span>
           </a>
        </div>
    )
}