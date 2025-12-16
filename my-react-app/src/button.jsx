function Button(){
    const eventdone = () => console.log("ouch");
    const handleevent = (e) => e.target.textContent="ouch";
    return(<>
        <button className="button" onClick={eventdone}>CLICK ME</button>
        <h1>hhhh</h1>
        <button onClick={(e) => handleevent(e)}>click me</button>
        </>
    );
    
}
export default Button