
const Tache = (props) => {

 

console.log(props)
    return    <li  
        className={(props.completed) ? 'strike' : '' }
        ><span onClick={() => props.completeTache(props.id)} >{props.item} </span>
    <button onClick={() => props.deleteTache(props.id)}>X</button></li>
}


export default Tache