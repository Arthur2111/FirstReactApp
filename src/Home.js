const Home = () => {

    // this is how we can define a function and assign it to a button
    // vue stores all functions as methods within its script tag 
    // since React uses State Component Functions we use JSX where we can write JS with HTML together
    const handleClick = (e) => {
        console.log('hello i am a blogger', e)
    }

    const handleClickAgain = (name,e) => {
        console.log('hello ' + name , '----------', e)
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            {/* how to pass arguments? we wrap our main function in an anonymus function */}
            {/* if we do not wrap our functions it will instantly be invokes */}
            <button onClick={(e) => handleClickAgain('Hwang', e) }> Click me again</button>
        </div>
    );
}

export default Home;
