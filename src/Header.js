import React, {useState, useEffect} from 'react'

function Header(props){
    const [count, setCount] = useState(0)
    // const [time, setTime] = useState(60)
    // const [timer, setTimer] = useState(null)


//    useEffect(()=>{
//        console.log("in use effect")
//        setTimer(setInterval(()=>{
//             setTime( time - 1 )
//        }, 1000))
//    }, [timer])

    return(
        <div id="header">

            <h1 onClick={()=>{setCount(count + 1)}}>{count} likes</h1>
            <h1>Shopping Central</h1>
            <p onClick={props.changePage} >View {props.page === "Items" ? "Cart" : "Items"}</p>
        </div>
    )
}

export default Header