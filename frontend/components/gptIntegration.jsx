import React,{ useState } from "react";
import axios from 'axios';

function gptIntegration(){
    const[userInput,setUserInput]=useState(null);
    const[response,setResponse]=useState(null);

    async function generateAns()
    {
        try{
            const resp=axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBppTrddsvEBRgQH_OA9jR5pxqR5kon6b0`,
                method: "post",
                data: {
                    "contents":[
                        {"parts":[{"text": userInput}]}
                    ]
                }
            })
            const ans=resp.data.candidates[0].content.parts[0].text;
            setResponse(ans);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    return(
        <>
        <h1>
            Chat with AI
        </h1>
        <div className="gpt-input">
            <textarea value={userInput} onChange={(e)=>setUserInput(e.target.value)} rows={2} cols={150}/>
        </div>
        <button className="send" onClick={generateAns}>Send</button>
        <div className="response-container">
            {response}
        </div>
        </>
    );
}
export default gptIntegration;