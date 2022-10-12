import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }
    const handlelowClick = () => {
        console.log("LowerCase was clicked!" + text);
        let nText = text.toLowerCase();
        setText(nText);
        props.showAlert("Converted to lower case", "success");
    }
    const handleclearTest = () => {
        // console.log("LowerCase was clicked!" + text);
        let nText = "";
        setText(nText);
    }
    const handleOnChange = (event) => {
        // console.log("OnChange!");
        setText(event.target.value);
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");

    }
    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleclearTest}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Your text Summary</h2>
                <p>Your text contains : {text.length} character and {text.split(" ").length - 1} words.</p>
                <p>{0.008 * text.split(" ").length} minutes taken to read the data. </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter text to preview here"}</p>
            </div>
        </>
    )
}
