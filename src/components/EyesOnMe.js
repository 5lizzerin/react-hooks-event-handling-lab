// Code EyesOnMe Component Here

function EyesOnMe () {
    function onFocusFunction () {
        console.log("Good");
    }
    function onBlurFunction () {
        console.log("Eyes on me!")
    }
    return <button onFocus={onFocusFunction} onBlur={onBlurFunction}>Eyes On Me</button>
}

export default EyesOnMe



// 3. On that `button`, add event handlers that listen for the `focus` and `blur` events.
// 4. When the `focus` event fires, use `console.log` to print out the text `'Good!'`.
// 5. When the `blur` event fires, use `console.log` to print out the text `'Hey! Eyes on me!'`.