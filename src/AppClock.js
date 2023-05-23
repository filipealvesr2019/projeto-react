import { useState } from "react";
import Clock from "./Clock";
export default function AppClock(){
    const [show, setshow] = useState(false);
    
    return <>
    {show &&  <Clock/>}
    <button onClick={
        () => setshow(!show) }>
        {
            show ? "Esconder": "Mostrar"
        }
    </button>
    </>;
}