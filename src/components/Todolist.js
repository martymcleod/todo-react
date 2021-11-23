
import { useState } from 'react'
import Tache from './Tache'

const Todo = () => {
    
    const [listTaches, setListTaches] = useState([{
        id:0,
        tache: "reviser"
    },
    {
        id:1,
        tache: "travailler"
    },
])
    

    const [tache, setTache] = useState('')
    const addTache = () => {
        const maxId = Math.max(...listTaches.map(o => o.id))
        console.log(maxId)
        setListTaches([...listTaches, { id: maxId + 1, tache }]) 
    }

    return <div>
        <h1>Liste des taches</h1>
        <input type="text" name="tache" onChange={(e) => setTache(e.target.value)} value={tache} />
        <button onClick={addTache}>ajouter</button>
        <ul>
            {listTaches.map((item) => {
               return  <Tache key={item.id} item={item.tache}/>
            })}
        </ul>
    </div>
}


export default Todo