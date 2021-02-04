import React, { useEffect } from 'react'
import Map from '../map'

const Home = () => {

    useEffect(() => {
        async function getData() {
            await fetch(`data.json`)
                .then(response => response.json())
                .then(data => console.log(data));
        }
        getData()

    }, []);


    return <div>
        <Map />
    </div>
}

export default Home