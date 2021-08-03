import {TooltipDemo } from './TooltipDemo';
import React,{useState} from 'react'


export const Demo: React.FC =props => {
    const [OnHover, setOnHover] = useState(false);
    const [secondary, setSecondary] = useState(true);
    const mouseOnIn = () => setOnHover( true );
    const mouseONOut = () => {setOnHover(false ); setSecondary(true)}
    const mousePress =() => setSecondary(false);
    

    return (
        <div>
            <TooltipDemo   secondary={secondary} mouseOnIn={mouseOnIn} mouseOnOut={mouseONOut}           OnHover={OnHover}
              mousePress={mousePress}
             />
        </div>
    )
}
