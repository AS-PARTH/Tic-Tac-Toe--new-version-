import { useState } from "react"

export default function Player({ initialName, symbol ,isActive , onChangeName}) {
    const [playerName , setPlayerName ] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
{/** EDIT NAME LOGIC */}
    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playerName )
        }
    }
{/** INPUT AREA'S LOGIC */}
function handleChange(event){
    setPlayerName(event.target.value); 
 }
    {/** IT CHANGES THE INPUT FILED NAME INTO STATIC NAME CONDITIONALLY  */}
    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing){
        editablePlayerName  = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return ( 
        <li className={isActive ? 'active' : undefined}> 
        {/* css class name conditionally given */}
            <span className="player">
                {editablePlayerName }
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
