import React from 'react'
import Map from '../map'
import Table from '../table'
import Loader from '../loader'

import { useSelector, useDispatch } from 'react-redux'
import { getRoute, loading, toggle, getMap } from '../../actions'

const Home = () => {

    const isLoading = useSelector(state => state.isLoading)
    const route = useSelector(state => state.route)
    const toggler = useSelector(state => state.toggler)
    const dispatch = useDispatch()
    const getRouteType = async (x) => {
        dispatch(loading())
        await fetch(`data.json`)
            .then(response => response.json())
            .then(data => {
                if (x === 'AB') {
                    dispatch(getRoute(data[0]))
                } else {
                    dispatch(getRoute(data[1]))
                }
                dispatch(loading())
                dispatch(getMap({
                    center: [42.69181499481202, 23.351221656799318],
                    zoom: 14
                }))
                dispatch(toggle('map'))
            }).catch(e => alert(e));
    }
    const handleToggle = (x) => {
        if (x === 'map') {
            dispatch(toggle('map'))

        } else {
            dispatch(toggle('table'))
        }
    }

    return <div>
        {isLoading
            ? <div className='centered'>
                <Loader />
                <h1>LOADING</h1>
            </div>
            : <>
                <button onClick={() => getRouteType('AB')}>GetRouteAB</button>
                <button onClick={() => getRouteType('BA')}>GetRouteBA</button>
                {route.name ?
                    <>

                        <h2>Маршрут:</h2>
                        <h2>{route.name}</h2>
                        {toggler === 'table' ?
                            <>
                                <button onClick={() => handleToggle('map')}>Покажи Карта</button>
                                <Table />
                            </> : <>
                                <button onClick={() => handleToggle('table')}>Покажи Tаблица</button>
                                <Map />
                            </>}
                    </>
                    : <div>
                  
                    </div>
                }
            </>
        }
    </div>
}

export default Home