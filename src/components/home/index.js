import React from 'react'
import Map from '../map'
import Table from '../table'
import Loader from '../loader'
import Button from '../button'
import ScrollToTop from '../scroll-to-top'
import { useSelector, useDispatch } from 'react-redux'
import { getRoute, loading, toggle, getMap } from '../../actions'
import './styles.scss'

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
    const handleToggle = () => {

        if (toggler === 'table') {
            
            dispatch(toggle('map'))
        } else {
            document.getElementById("content").scrollIntoView()
            dispatch(toggle('table'))
        }
    }

    return <div>
        <section className="banner">
            <div className="container">
                <div className="banner-text">
                    <h1>Автобусна Линия 120</h1>
                    <p><strong>Информирай се относно маршрута и спирките.</strong></p>
                    <p><strong> Стигни където трябва. Навреме!</strong></p>
                    <div className="dropdown" id='content'>
                        <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Избери Маршрут </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <span onClick={() => getRouteType('AB')} className="dropdown-item s" >Зоопарка - ж.к. Левски Г</span>
                            <span onClick={() => getRouteType('BA')} className="dropdown-item s" >ж.к Левски Г - Зоопарка</span>
                        </div>

                    </div>

                </div>
            </div>
            <img className="banner-image" src="https://preview.ibb.co/bMi5Y6/banner_img.png" alt="monitoring" />
        </section>
        <div className='container'>


            <div className='row'>
                <div className='col'>
                    {isLoading
                        ? <div className='centered'>
                            <Loader />
                            <h1>LOADING</h1>
                        </div>
                        : <>
                            {route.name
                                ? <div >
                                    <div className={route.name === 'Зоопарка - ж.к. Левски Г' ? 'ab-text' : 'ba-text'}>
                                        <h4>Маршрут:</h4>
                                        <h4>{route.name}</h4>
                                    </div>
                                    <Button handler={handleToggle} content={toggler} />
                                    {toggler === 'table' ? <Table /> : <Map />}
                                </div>
                                : ''}
                        </>
                    }
                </div>
            </div>
        </div>
        <ScrollToTop />
    </div>
}

export default Home