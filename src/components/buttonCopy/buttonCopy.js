import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'; 

export default function ButtonCopy({shortUrl})
{
    function Copy()
    {
        navigator.clipboard.writeText("https://url-shorter-apirest.onrender.com/api/"+shortUrl)
    }

    return (
        <div className="relative w-9 h-10 rounded-md hover:scale-105 hover:bg-neutral-800 transition ease-in-out duration-200">
            <button className="cursor-pointer flex w-9 h-10 justify-center items-center" title="Copy To Clipboard" onClick={Copy}>
                <FontAwesomeIcon className="w-6 h-6" id="buttonCopy" icon={faCopy}/>
            </button>
        </div>
    )
}