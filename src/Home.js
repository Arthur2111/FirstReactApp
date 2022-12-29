import { useState } from "react"

const Home = () => {
    // by default this value is not reactive unlike vue when defined in a data funtion 
    // let name = 'Hwang'
    // how can we make name REACTIVE ??? using hook  (useState hook)
    // we give this state an initial value 'mario'
    const [name, setName] = useState('Hwang')
    // the first value of the array is the initial value and second is a function which is used to change the value where naming convention is set + whatever you called the initial value 
    const [age, setAge] = useState('24')

    // this is how we can define a function
    // vue stores all functions as methods within its script tag since React uses State Component Functions we use JSX where we can write JS with HTML together
    const handleClick = () => {
        setName('Arthur')
        setAge('25')
    }



    // const handleClickAgain = (name,e) => {
    //     console.log('hello ' + name , '----------', e)
    // }





    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            {/*  assign a function to a button */}
            <button onClick={handleClick}>Click Me</button>
            {/* how to pass arguments? we wrap our main function in an anonymus function */}
            {/* if we do not wrap our functions it will instantly be invokes */}
            {/* <button onClick={(e) => handleClickAgain('Hwang', e) }> Click me again</button> */}
        </div>
    );
}

export default Home;
