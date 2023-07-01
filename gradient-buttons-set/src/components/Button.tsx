import "./button.css"
import  Arrow  from "../assets/arrow.png"

type Props = {
    background: string;
}


export const Button = ( {background}: Props) => {
    return (
        <button style={{background}}>Read More <Arrow/></button>
    )
}


