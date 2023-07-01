import { Button } from "./components/Button"
import "./App.css"

const bgColors = { 
    "Orange": "linear-gradient(105deg,rgba(242, 238, 53, 1) 0%,rgba(242, 180, 47, 1) 50%,rgba(253, 105, 105, 1) 100%)",

    "Blue": "linear-gradient(105deg, rgba(93, 0, 235, 1) 0%, rgba(89, 23, 234, 1) 5.32%, rgba(78, 76, 233, 1) 19.04%, rgba(69, 122, 232, 1) 32.93%, rgba(62, 160, 231, 1) 46.72%, rgba(56, 189, 231, 1) 60.38%, rgba(52, 209, 230, 1) 73.89%, rgba(50, 222, 230, 1) 87.18%, rgba(49, 226, 230, 1) 100%)",

    "Pinkish": "linear-gradient(105deg, rgba(42, 235, 235, 1) 0%, rgba(99, 99, 255, 1) 25%, rgba(208, 64, 251, 1) 50%, rgba(255, 70, 200, 1) 75%, rgba(255, 158, 158, 1) 100%)",

    "Blueish": "linear-gradient(105deg, rgba(230, 44, 68, 1) 0%, rgba(138, 15, 163, 1) 51.28%, rgba(67, 34, 235, 1) 100%)",
    "Greenish": "linear-gradient(105deg, rgba(156, 255, 135, 1) 0%, rgba(147, 253, 143, 1) 15.34%, rgba(123, 249, 164, 1) 40.37%, rgba(83, 242, 199, 1) 71.76%, rgba(42, 235, 235, 1) 100%)",

    "Purple": "linear-gradient(105deg, rgba(42, 235, 235, 1) 0%, rgba(97, 116, 255, 1) 45%, rgba(182, 60, 251, 1) 75%, rgba(255, 71, 227, 1) 100%)",

    "Pink": "linear-gradient(105deg, rgba(255, 70, 200, 1) 0%, rgba(208, 64, 251, 1) 100%)",

    "Blueish2": "linear-gradient(105deg, rgba(116, 122, 255, 1) 0%, rgba(0, 213, 255, 1) 100%)",

    "DarkPurple": "linear-gradient(105deg, rgba(104, 0, 186, 1) 0%, rgba(227, 108, 205, 1) 100%)",

    "Pastel": "linear-gradient(105deg, rgba(150, 246, 255, 1) 0%, rgba(209, 215, 252, 1) 50.37%, rgba(246, 138, 255, 1) 100%)",

    "Greenish2": "linear-gradient(105deg, rgba(99, 99, 255, 1) 0%, rgba(36, 201, 201, 1) 50%, rgba(156, 255, 135, 1) 100%)",

    "Yellow": "linear-gradient(105deg, rgba(255, 251, 56, 1) 0%, rgba(255, 189, 49, 1) 100%",

    "Reddish": "linear-gradient(105deg, rgba(209, 31, 49, 1) 0%, rgba(240, 96, 151, 1) 50%, rgba(255, 215, 168, 1) 100%",

    "Navy": "linear-gradient(105deg, rgba(76, 255, 225, 1) 0%, rgba(66, 124, 204, 1) 50%, rgba(57, 0, 173, 1) 100%)",

    "Instagram": "linear-gradient(105deg, rgba(255, 251, 56, 1) 0%, rgba(255, 189, 49, 1) 20%, rgba(253, 105, 105, 1) 40%, rgba(255, 70, 200, 1) 60%, rgba(208, 64, 251, 1) 80%, rgba(99, 99, 255, 1) 100%",
    
    "Reddish2": "linear-gradient(105deg, rgba(255, 70, 200, 1) 0%, rgba(253, 105, 105, 1) 100%)"
};

function App() {
  return (
    <>
    <Button background={bgColors.Orange}/>
    <Button background={bgColors.Blue}/>
    <Button background={bgColors.Pinkish}/>
    <Button background={bgColors.Blueish}/>
    <Button background={bgColors.Greenish}/>
    <Button background={bgColors.Purple}/>
    <Button background={bgColors.Pink}/>
    <Button background={bgColors.Blueish2}/>
    <Button background={bgColors.DarkPurple}/>
    <Button background={bgColors.Pastel}/>
    <Button background={bgColors.Greenish2}/>
    <Button background={bgColors.Yellow}/>
    <Button background={bgColors.Reddish}/>
    <Button background={bgColors.Navy}/>
    <Button background={bgColors.Instagram}/>
    <Button background={bgColors.Reddish2}/>
    </>
  )
}

export default App
