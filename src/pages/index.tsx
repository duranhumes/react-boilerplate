import * as React from 'react'

export default function App() {
    const [count, useCount] = React.useState(0)

    const increment = () => useCount(count + 1)
    const decrement = () => useCount(count - 1)

    return (
        <div>
            <h1>Hello from index</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <p>{count}</p>
        </div>
    )
}
