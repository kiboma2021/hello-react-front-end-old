import React from 'react'

function greetings(props) {
  return (
    <div>
    <h1>This is a random Message from the API</h1>
    {props.greetings.map((greeting) => {
      return (
        <div key={greeting.id}>
          <h2>{greeting.message}</h2>
        </div>
      );
    })}
  </div>
  )
}

export default greetings
