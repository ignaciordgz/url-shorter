import InputLink from "../components/inputLink/inputLink";
import ButtonEnter from "../components/buttonEnter/buttonEnter";
import Navbar from "../components/navbar/navbar";
import ButtonRefresh from "../components/buttonRefresh/buttonRefresh";
import Output from "../components/output/output";
import { useRef, useState } from "react";
import { axiosGetShortUrl } from "../service/serviceCalls"

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
            <form class='space-y-10' onSubmit={handleSubmit}>
                <InputLink ref={inputRef}></InputLink>
                <ButtonEnter></ButtonEnter>
                <Output shortUrl={shortUrl}></Output>
            </form>
        </div>
    )
}