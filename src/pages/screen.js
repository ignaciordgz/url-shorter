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

    const [inputValue, setValue] = useState("")

    const takeChangeInput = (e) => 
    {
        setValue(e.target.value)
    }

    const handleSubmit = async (e) => 
    {
        e.preventDefault()
        const url = inputRef.current.value

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
            console.error("Error", error)
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
        <div className="space-y-6">
            <form className='space-y-10' onSubmit={handleSubmit}>
                <InputLink takeChangeInput={takeChangeInput} value={inputValue} ref={inputRef}></InputLink>
                <ButtonEnter></ButtonEnter>
            </form>
            <div className="flex justify-evenly pl-60 items-center">
                    <Output shortUrl={shortUrl}></Output>
                    <div className="flex space-x-4">
                        <ButtonCopy></ButtonCopy>
                        <ButtonRefresh onRefresh={Refresh}></ButtonRefresh>
                    </div>
            </div>
        </div>
    )
}