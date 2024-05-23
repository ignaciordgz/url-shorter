import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';

export default function ButtonRefresh({onRefresh})
{
    const [ hovered, setHovered ] = useState(false)

    return(
        <div class="w-9 h-10">
            <button 
                id="refresh" 
                class="flex items-center justify-center rounded-md w-9 h-10 hover:bg-neutral-800 opacity-40 hover:opacity-100 transition ease-in-out duration-200 hover:scale-105"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={onRefresh}
                title='Click to Refresh Input'
            >
                <FontAwesomeIcon 
                    icon={faArrowsRotate} 
                    color='white'
                    className={hovered ? "rotate-180 transition duration-500 ease-in-out w-6 h-6" : "w-6 h-6"}/>
            </button>
        </div>
    )
}