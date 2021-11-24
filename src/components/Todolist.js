
import { useState } from 'react'
import Tache from './Tache'

const Todo = () => {
    
    const [listTaches, setListTaches] = useState([{
        id:0,
        tache: "reviser",
        completed: false,
    },
    {
        id:1,
        tache: "travailler",
        completed: false,
    },
])
    

    const [tache, setTache] = useState('')
    const addTache = () => {
        const maxId = Math.max(...listTaches.map(o => o.id))
        console.log(maxId)
        setListTaches([...listTaches, { id: maxId + 1, tache, completed: false }]) 
    }

      
    const deleteTache = (id) => {
        console.log(id)
        setListTaches([...listTaches.filter((i) => i.id !== id )])
        console.log('test')
    }

    const completeTache= (id) =>
    {
        let newListTache = listTaches.map( (tache) => {
               return  (tache.id == id) ? {...tache, completed: !tache.completed} :  {...tache}
                
            })
       setListTaches(newListTache)
    }

    return <div>
        <h1>Liste des taches</h1>
        <input type="text" name="tache" onChange={(e) => setTache(e.target.value)} value={tache} />
        <button onClick={addTache}>ajouter</button>
        <ul>
            {listTaches.map((item) => {
               return  <Tache 
                            key={item.id} 
                            completeTache={completeTache}
                            deleteTache={deleteTache} 
                            item={item.tache} 
                            id={item.id} 
                            completed={item.completed} />
            })}
        </ul>
    </div>
}


export default Todo