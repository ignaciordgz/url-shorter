
export default function InputLink()
{
    return(
        <div class="relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-neutral-600 to-slate-600 rounded-lg blur-md opacity-90"></div>
                <input class="relative bg-black rounded-lg" type="text" id="link" placeholder="link" style={{width:"100vh"}}/>
        </div>
    )
}
