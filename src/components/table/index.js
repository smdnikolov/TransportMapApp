import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMap, toggle } from '../../actions'


const Table = () => {

    const route = useSelector(state => state.route)
    const dispatch = useDispatch()

    const showStop = (x) => {
        dispatch(getMap({
            center: Object.values(x.location),
            zoom: 18
        }))
        dispatch(toggle('map'))
    }
    const renderTable = (x, index) => {
        return <tr key={x.id}>
            <th scope="row">{++index}</th>
            <td>{x.name}</td>
            <td>
                <button className='btn btn-link' onClick={() => showStop(x)} href=''>Виж на картата</button>
            </td>
        </tr>
    }
    const stops = () => {
        if (route.name) {
            return route.stops.map((x, index) => renderTable(x, index))
        }
    }

    return <table className="table table-striped table-dark">
        <thead>

            <tr>
                <th scope="col">#</th>
                <th scope="col">Спирка</th>
                <th scope="col">Покажи на карта</th>
            </tr>
        </thead>

        <tbody>
            {stops()}
        </tbody>
    </table>
}

export default Table