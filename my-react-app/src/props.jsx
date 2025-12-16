function Props(props){
    return(
    <div>
        <p>name:{props.name} </p>
        <p>Age:{props.age}</p>
        <p>student:{props.isStudent ? "yes" : "no"}</p>
    </div>
    )
}
export default Props