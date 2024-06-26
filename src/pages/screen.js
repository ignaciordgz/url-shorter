import InputLink from "../components/inputLink/inputLink";
import ButtonEnter from "../components/buttonEnter/buttonEnter";
import ButtonRefresh from "../components/buttonRefresh/buttonRefresh";
import Output from "../components/output/output";
import { useRef, useState } from "react";
import { axiosPostStoreUrl } from "../service/serviceCalls"
import ButtonCopy from "../components/buttonCopy/buttonCopy";

export default function Screen()
{
    const inputRef = useRef()

    const [shortUrl, setUrl] = useState("")

    const [originalUrl, setOriginalUrl] = useState("")

    const [inputValue, setValue] = useState("")

    const takeChangeInput = (e) => 
    {
        setValue(e.target.value)
    }

    const handleSubmit = async (e) => 
    {
        e.preventDefault()
        const url = inputRef.current.value
        setOriginalUrl(url)

        var urlDto = 
        {
            originalURL:url,
            shortURL:shortUrl
        }

        axiosPostStoreUrl(urlDto).then( response  => 
        {
            setUrl(response.data)
        })
        .catch(error => 
        {
            console.error("Error, inserte un link valido", error)
        });
    }

    const Refresh = () =>
    {
        setValue("")
        setUrl("")
        if (inputRef.current)
        {
            inputRef.current.value = ""
        }
    }

    return(
        <div id="divIn" className="space-y-6">
            <form className='space-y-10' onSubmit={handleSubmit}>
                <InputLink takeChangeInput={takeChangeInput} value={inputValue} ref={inputRef}></InputLink>
                <ButtonEnter></ButtonEnter>
            </form>
            <div id="divOut" className="relative flex justify-evenly pl-60 items-center">
                    <Output originalURL={originalUrl} shortUrl={shortUrl}></Output>
                    <div className="relative flex space-x-4">
                        <ButtonCopy shortUrl={shortUrl}></ButtonCopy>
                        <ButtonRefresh onRefresh={Refresh}></ButtonRefresh>
                    </div>
            </div>
        </div>
    )
}