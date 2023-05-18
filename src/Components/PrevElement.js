import React, {useState,useEffect,useRef} from 'react';

function PrevElement(){
    const [inputValue, setInputValue] = useState("");
    const prevInput = useRef("");

    useEffect(() => {
        prevInput.current = inputValue;
    }, [inputValue]);

    return (
        <>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {prevInput.current}</h2>
        </>
    );
}

export default PrevElement;