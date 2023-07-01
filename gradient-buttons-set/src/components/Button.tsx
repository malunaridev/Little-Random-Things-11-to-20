import "./button.css"
import { Arrow } from "./Arrow"

type Props = {
    background: string;
}


export const Button = ( {background}: Props) => {
    return (
        <button style={{background}}>Read More <Arrow/></button>
    )
}


