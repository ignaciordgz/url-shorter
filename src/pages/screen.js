import { Grid } from "@mui/material";
import InputLink from "../components/inputLink/inputLink";
import ButtonEnter from "../components/buttonEnter/buttonEnter";
import Navbar from "../components/navbar/navbar";
import ButtonRefresh from "../components/buttonRefresh/buttonRefresh";
import Output from "../components/output/output";

export default function Screen()
{
    return(
        <div class="space-y-10">
            <InputLink></InputLink>
            <ButtonEnter></ButtonEnter>
            <Output></Output>
        </div>
    )
}