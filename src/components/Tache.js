
const Tache = (props) => {

console.log(props)
    return    <li  >{props.item} <button onClick={() => props.deleteTache(props.id)}>X</button></li>
}


export default Tache