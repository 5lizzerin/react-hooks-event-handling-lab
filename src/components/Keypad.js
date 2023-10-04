// Code Keypad Component Here

function Keypad (){
    function passwordTyped () {
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={passwordTyped}></input>
        </div>
    )
}

export default Keypad;