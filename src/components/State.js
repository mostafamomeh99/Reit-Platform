import { createContext, useState } from "react"
export const counerx= createContext()
function State(props){
    let [count,setcount]=useState(0)
    let [id,setId]=useState([])
    
    let counter=(i)=>{
      
      if (!id.includes(i)) 
        {setcount(count+1) 
            setId([...id,i])}
     }
     let decounter=(i)=>{
      
        setcount(count-1) 
          let x=id.filter(el=>{
            return el !==i?el:"";
          })
        setId(x) }

        
return(
<>
<counerx.Provider value={{count,counter,decounter,id}}>
{props.children}

</counerx.Provider>

</>

)

}

export default State