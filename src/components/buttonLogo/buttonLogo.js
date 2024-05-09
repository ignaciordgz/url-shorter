import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function ButtonLogo()
{
    return (
        <div class="w-9 h-10 rounded-md hover:bg-neutral-800 hover:scale-105 transition duration-200 ease-in-out">
           <a class="w-9 h-10 flex justify-center items-center opacity-40 hover:opacity-100" href="https://localhost:3000" target='_blank' rel="noreferrer">
                <FontAwesomeIcon class="w-6 h-6" icon={faLink}/>
           </a> 
        </div>
    )
}