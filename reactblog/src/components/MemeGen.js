import React, { useEffect } from "react"

export default function MemeGen() {
    
    // state variables to set top and bottom text on the image and a meme
    // text set by css

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    

    // array of all memes from api , first is a state variable, second is function
    // destructoring
    const [allMemes, setAllMemes] = React.useState("")

    // fetching data from APi, converting to json, setting state to data
    // only need to run it once since only need to grab it once. 

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    } , [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        
        // take old default meme, parse through and keep all old variables in the object,
        // yet update the randomImage url only. 
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    // 
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name = "topText"
                    // value is the default text of the input
                    // onchange :
                    //stop it from loading a new image just update text if i want same meme
                    value = {meme.topText}
                    onChange = {handleChange}
                />

                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange = {handleChange} 
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className = "meme">
                <img src={meme.randomImage} className="meme--image" />
                {/* h2 elements that are placed on top of the image.  */}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}