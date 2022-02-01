import React from "react"



// This is my main component ---------------------------------
export default function Main() {


 
    // Here I use a state hook 
    const [meme, setMeme] = React.useState({
        randomImage: "" 
    })

    // Here I use a state hook to change the img src when button is clicked
    const [allMemes, setAllMemes] = React.useState("")


    // Here I use useEffect hook to call the meme API -------------------------
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    
    // Here is a onClick function that takes a random img source from the API call----------
    function randomMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
 
// In line 45 I hide the img tag so the img doesnt display when user first loads the page
    return (
        <div className="main">
            <div className="button-container">
            <button className="button" onClick={randomMeme}>Push to get your meme!</button>
            </div>
            {meme.randomImage?<img className="meme-img" src={meme.randomImage} alt="random-meme"></img>:null}
        </div>
    )
}