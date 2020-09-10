import React, { useState, useEffect } from "react";

function Header(props) {
  const [name, setName] = useState("Andrew");
  const [age, setAge] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("in timer");
      setTime(time => time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); //componentDidMount

  useEffect(() => {
    console.log("in use effect");
    document.title = name;
    return () => {
      // cleanup
    };
  }, [name]);

  //    useEffect(()=>{
  //        console.log("in use effect")
  //        setTimer(setInterval(()=>{
  //             setTime( time - 1 )
  //        }, 1000))
  //    }, [timer])

  return (
    <div id="header">
      <h1>
        Name: {name} Age: {age}
      </h1>
      <h2>{time}</h2>
      <button onClick={() => setAge(age + 1)}>Happy Birthday</button>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
    </div>
  );
}

export default Header;
