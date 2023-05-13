import { useState, useEffect } from "react";

const Contador = () =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Me monte!')
        return ()=> console.log('Me fui!');
    }, [count]);




    const handleIncrement = () =>{
        setCount(count + 1)
    };

    const handleDecrement = () =>{
       count > 0 && setCount( count - 1)
    };

    return(
        <div>
            <h1>Contador: </h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
};

export default Contador;
