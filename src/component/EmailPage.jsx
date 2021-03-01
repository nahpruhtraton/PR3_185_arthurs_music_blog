import React from "react"
import ReactDOM from "react-dom"
import './styles.css';

function EmailPage(){
    return(
    <body>
        <main>
            <form>
                <label for="email">Your Email Address:</label>
                <br></br>
                <input type="text" id="email"></input>
                <br></br>
                <button type="submit" onclick="validate(document.getElementById('email').value)">Submit</button>
            </form>
        </main>
    </body>
    )
}

export default EmailPage;
