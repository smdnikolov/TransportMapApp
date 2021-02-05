import React from 'react'
import './styles.css'

const ScrollToTop = () => {

    const scrollFunction = () => {
        if (window.scrollY >= 400) {
            document.getElementById('stt').style.display = "block";
        } else {
            document.getElementById('stt').style.display = "none";
        }
    }
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('scroll', scrollFunction)

    return (
        <button onClick={scrollTop} id='stt' className="btn-stt shaow-none">➤</button>
    )

}

export default ScrollToTop