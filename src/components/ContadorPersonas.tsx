import {useState} from "react";
  
 

export default function ContadorPersonas() {
  const [personas, setPersonas] = useState(1);

    return ( 
    <>
        <h2>Contador de personas</h2>
        <section>
            <button onClick={() => setPersonas(personas => personas - 1)} disabled={personas===1}>-</button>
            <p>{personas}</p>
            <button onClick={() => setPersonas(personas => personas + 1)} disabled={personas===50}>+</button>
        </section>
    </> )
}   