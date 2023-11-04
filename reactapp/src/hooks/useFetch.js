import { useState, useEffect } from "react";

export const useFetch = ( url ) => {

    const [ data, setData ] = useState([]);

    useEffect( () => {
        fetch( "https://jsonplaceholder.typicode.com/todos" )
            .then((response) => response.json())
            .then((response) => setData(response))
    }, [ url ]);

    return [ data ];
};