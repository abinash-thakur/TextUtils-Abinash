import React from 'react'

export default function About(props) {
    return (
        <>
        <div className="container">
            <div id="main">
                <img src="img.jpeg" alt="not found" />
                <div id="text">
                <h1 className='text-primary'>About TextUtils</h1>
                <p style={{color:props.mode==='light'?"black":"white"}}>Hi My name is Abinash and I make this textUtils in this app you can get all the required features of text,you can convert to upper case
                    leatter,convert to lowercase latter,Remove the extra spaces from the input text,you copy all the text from the textArea and easily do all this task mention 
                    hear.
                </p>
                </div>
            </div>
            </div>
        </>
    )
}
