import { Message } from "@mui/icons-material";
import axios from "axios";
import { useState, useEffect } from "react";

export function NonprofitIndex() {

const [nonprofits, setNonprofits] = useState([])

const handleNonprofitIndex = () =>{
  console.log("inHandleNonprofit Index...")
  axios.get("http://localhost:3000/nonprofits.json").then((response)=> {
    console.log(response.data.message)
    setNonprofits(response.data.message)
  })

}

useEffect(handleNonprofitIndex, [])

// const workingNonprofit=() => (
//   console.log("nonprofits"),
//   console.log(nonprofits))


  return (
    <div>
      Im nonprofit index
      {nonprofits.map((nonprofit) =>
       {return <div>
        <p> name: {nonprofit.name}</p>
        <p> description: {nonprofit.description}</p>
        <p> website: {nonprofit.website}</p>
        <img src={nonprofit.picture}/>

        <hr/>
        </div>}
      // console.log(nonprofit.name)
        )}
{/* <button onClick={workingNonprofit}>Show Console Log</button> */}

    </div>
  )
};




export default NonprofitIndex