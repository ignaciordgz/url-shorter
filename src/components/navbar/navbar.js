import ButtonLogo from "../buttonLogo/buttonLogo"
import ButtonGitHub from "../buttonGitHub/buttonGitHub"

export default function Navbar()
{
return (
    <nav class="items-center flex pt-2 pb-2 pl-5 pr-5 w-full h-16 justify-between bg-neutral-900">
        <ButtonLogo></ButtonLogo>
        <ButtonGitHub></ButtonGitHub>
    </nav>
)
}