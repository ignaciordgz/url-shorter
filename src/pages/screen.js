import InputLink from "../components/inputLink/inputLink";
import ButtonEnter from "../components/buttonEnter/buttonEnter";
import Navbar from "../components/navbar/navbar";
import ButtonRefresh from "../components/buttonRefresh/buttonRefresh";
import Output from "../components/output/output";
import { useRef, useState } from "react";
import { axiosGetShortUrl } from "../service/serviceCalls"
import ButtonCopy from "../components/buttonCopy/buttonCopy";

export default function Screen()
{
    const inputRef = useRef()

    const [shortUrl, setUrl] = useState("")

    const handleSubmit = async (e) => 
    {
        e.preventDefault()
        const url = inputRef.current.value

        setUrl((await axiosGetShortUrl()).data)
    }

    return(
        <div>
            <form className='space-y-10' onSubmit={handleSubmit}>
                <InputLink ref={inputRef}></InputLink>
                <ButtonEnter></ButtonEnter>
                <div className="flex pl-52 justify-evenly items-center">
                    <Output shortUrl={shortUrl}></Output>
                    <ButtonCopy></ButtonCopy>
                </div>
            </form>
        </div>
    )
}