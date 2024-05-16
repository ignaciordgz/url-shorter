import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'; 

export default function ButtonCopy()
{
    return (
        <div className="relative w-9 h-10 rounded-md hover:scale-105 hover:bg-neutral-800 transition ease-in-out duration-200">
            <a className="cursor-pointer flex w-9 h-10 justify-center items-center">
                <FontAwesomeIcon className="w-6 h-6" id="buttonCopy" icon={faCopy}/>
            </a>
        </div>
    )
}