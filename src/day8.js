import React, {useState, useEffect} from 'react'

export default function Day8() {
  const [message, setMessage] = useState("Hello dear one, learning React...?")
  useEffect(() => {
    console.log('use effect hook called');
    setTimeout(() =>{
      setMessage("Great... This is time to learn about HOOKS")
    }, 9000)
  })
  return (
    <div className="App">
      <h1>Day 8: </h1>
      <h1>{message}</h1>
    </div>
  );
}
