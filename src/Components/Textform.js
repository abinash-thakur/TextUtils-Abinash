import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState("");
    let wordCount = 0;
    let textArea = document.getElementById('form');
    let word = document.getElementById('word');
    //when uppercase button will be click convert to uppercase
    const changeToUpeercase = () => {
        setText(text.toUpperCase());
        props.showAlert("Convert to upper case","success");
    }

    //when lowercase button is clicked convert to lowercase
    const changeToLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Convert to Lower case","success");
    }

    //this is use for update the textarea
    const handelOnchange = (event) => {
        setText(event.target.value);
        wordCount = text.split(" ").length;
        word.innerText = wordCount + " " + "Word";
    }

    //when click to clear button all the text is clear
    const clear = () => {
        setText(textArea.value = "");
        wordCount = 0;
        word.innerText = wordCount + " " + "Word";
        props.showAlert("All text is clear from the text area","success");
    }

    //when the user clcick the button all text will be copy
    const clicktoCopy=()=>{
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        props.showAlert("All text are copy into the clicpbord","success");
    }
    //to remove extraspaces
    const removeSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All extraspaces are remove from the textarea","success");
    }


    return (
        <>
            <div className={`container my-3 text-${(props.mode==="light")?"dark":"light"}`}>
                <h1>Welcome to textUtils</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${(props.mode==="light")?"dark":"light"} bg-${props.mode}`} id="form" rows="8" value={text} placeholder='Enter the text hear' onChange={handelOnchange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={changeToUpeercase}>UpperCase</button>
                <button className="btn btn-success ms-2" onClick={changeToLowerCase}>LowerCase</button>
                <button className='btn btn-warning ms-2' onClick={clicktoCopy}>Copy</button>
                <button className='btn btn-info ms-2' onClick={removeSpace}>Remove Extra Spaces</button>
                <button className="btn btn-danger ms-2" onClick={clear}>Clear</button>
            </div>

            <div className={`container text-${(props.mode==="light")?"dark":"light"}`}>
                <h2>Text Summary</h2>
                <h5 className="text-danger mx-2">{text.length} Character</h5>
                <h5 className="text-primary mx-2" id="word">{wordCount} Words</h5>
                <span className="badge bg-warning text-dark d-block fs-4 my-2">Text Preview</span>
                <p className='my-2 fs-5'>{(text.length===0)?"Enter some text in above box to preview":text}</p>
            </div>

        </>
    )
}
