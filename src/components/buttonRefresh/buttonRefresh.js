import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

export default function ButtonRefresh()
{
    const [hovered, setHovered ] = useState(false)

    return(
        <div class="items-center justify-center">
            <button 
                id="refresh" 
                class="rounded-md pt-1 pl-2 pr-2 pb-1 hover:bg-neutral-800 opacity-40 hover:opacity-100 transition ease-in-out duration-200 hover:scale-105 hover:transition hover:second:rotate-45"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <FontAwesomeIcon 
                    icon={faArrowsRotate} 
                    color='white'
                    className={hovered ? "rotate-180 transition duration-500 ease-in-out" : ""}/>
            </button>
        </div>
    )
}