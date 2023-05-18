import React,{ useState } from "react";

function Color(){
    const [color,setColor] = useState("Pink");

    return(
        <div>
            <h1 style={{color: color}}>Selected Color - {color}</h1>
            <button onClick={()=> setColor('Blue')}>Blue</button>
            <button onClick={()=> setColor('Green')}>Green</button>
            <button onClick={()=> setColor('Pink')}>Pink</button>
            <button onClick={()=> setColor('Purple')}>Purple</button>
        </div>
    )
}

export default Color;