import React,{useState} from 'react'

export default function Textform(props) {
    var [Text , setText] = useState("Enter Your Text TO Analyze")

    var handleOnClick = function(e){
        setText(e.target.value)
    }
    var toUppercase = function(){
        let upperText = Text.toUpperCase();
        setText(upperText) 
        props.showAlert("Text Convered To Uppercase",'success');
    }
    var toLowercase = function(){
        let upperText = Text.toLowerCase();
        setText(upperText)
        props.showAlert("Text Coverted To Lowercase",'success');

    }
    var copy = function(){
        var copyText =  document.getElementById("textform")
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Is Copied Successfully",'success');
    }
    var toWriting = function(){
        var textArea = document.getElementById("textform");
        textArea.style.fontFamily = 'customfont'
        props.showAlert("Font-Style Changed Successfully",'success');

    }
    var toOriginal = function(){
        var textArea = document.getElementById("textform");
        textArea.style.fontFamily = 'cursive';
        props.showAlert("Back To Original Style",'success');

    }
    var removeSpaces = function(){
      let removeSpace = Text.split(/[ ]+/);
      setText(removeSpace.join(" "));
    }
    // removing whitespaces from starting and end 
    let word = Text.trim(); 
    // counting number of word through split method
    let newWord = word.split(/[\n ]+/g);
    // removing whitespaces from dbetween the words
    var clearWord = newWord.filter(elm=>{
      return elm!=="" && elm!==".";
    })
  return (
    <div>
      <div className="form">
        <h3>Enter Your Text</h3>
        <textarea name="Textform" id="textform" className='myclass' cols="80" rows="20" value={Text} onChange={handleOnClick}></textarea>
        <div className="button">
        <button onClick={toUppercase}>To Uppercase</button>
        <button onClick={toLowercase}>To Lowercase</button>
        <button onClick={copy}>Copy</button>
        <button onClick={toWriting}>Hand Written</button>
        <button onClick={toOriginal}>orgignal Text</button>
        <button onClick={removeSpaces}>Remove Spaces</button>
        </div>
        <div className="info">
            <p>{clearWord.length}Words</p>
            <p>{Text.length}Characters</p>
        </div>
      </div>
    </div>
  )
}
