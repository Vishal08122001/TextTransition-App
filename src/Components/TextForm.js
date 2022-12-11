import React, { useState } from 'react';





////For Changing text to UpperCase
export default function TextForm(props) {
    const handleupClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Coverted to UPPERCASE !", "success")

    }


    ////For Changing text to Lowecase
    const handleDownClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Coverted to lowercase !", "success")
    }


    ////For Changing text to " "
    const clearText = () => {
        setText("")
        props.showAlert("Text Cleared!", "success")
    }





    ////Function for copying text to clipboard
    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.innerHTML);
        props.showAlert("TextCopied !", "success")

    }





    ////For Removing Extra Spaces
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed !", "success")

    }


    // //  With this we can update our text 
    const handleonchange = (event) => {
        setText(event.target.value)
    }




    const [text, setText] = useState("")
    // text = "new text " //Wrong way 
    //setText = "new text" // correct way
    let Word = text.split(" ").length - 1;



    return (
        <>
            <div className='Container'>
                <h1 style={{ color: props.mode === "dark" ? "white" : "black" }} >Enter the text to Analyze</h1>
                <div className="mb-3 mx-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-success mx-3" onClick={handleupClick}>UpperCase</button>
                <button className='btn btn-success mx-3' onClick={handleDownClick}>LowerCase</button>
                <button className='btn btn-success mx-3' onClick={clearText}>ClearText</button>
                <button className='btn btn-success mx-3' onClick={copyText}>CopyText</button>
                <button className='btn btn-success mx-3' onClick={removeExtraSpaces}>RemoveExtraSpaces</button>



            </div>
            <div className="container my-5" style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h2 >Text Summary</h2>
                <p>{Word} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <p>{text.split('.').length} Sentences</p>
                <h3 className='mt-5'>Preview</h3>
                <p>{text.length > 0 ? text : "Enter text to preview!"}</p>

            </div>
        </>
    )
}
