import { forwardRef } from "react"

export const InputLink = forwardRef(({value, takeChangeInput}, ref) =>
{
    return(
        <div class="relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-neutral-600 to-slate-600 rounded-lg blur-md opacity-90"></div>
                <input class="relative bg-black rounded-lg font-bold" ref={ref} type="text" id="link" onInput={takeChangeInput} value={value} placeholder="link" style={{height:"2.5rem", fontSize:"20px"}}/>
        </div>
    )
})

export default InputLink