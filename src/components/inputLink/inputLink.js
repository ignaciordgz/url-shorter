
export default function InputLink()
{
    return(
        <div class="relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-neutral-600 to-slate-600 rounded-lg blur-md opacity-90"></div>
                <input class="relative bg-black rounded-lg font-bold" type="text" id="link" placeholder="link" style={{width:"54.5rem", height:"2.5rem", fontSize:"20px"}}/>
        </div>
    )
}