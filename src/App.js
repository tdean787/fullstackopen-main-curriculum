import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name} </p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log('hello')
return (  <div>
  <Hello name="Taylor" />
    <p>It is now {now.toString()}</p>
    <p>
      {a} + {b} equals {a+b}
    </p>
  </div>)
}

export default App;
