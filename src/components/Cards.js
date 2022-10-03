import React from 'react'
import '../css/Cards.css'

const Cards = ({img, alt, siteName, url}) => {

    function goTo() {
        window.location.href=url
    }
    return (
        <article className='card-article'>
            <div className='card'>
                <img src={img} alt={alt} ></img>
                <hr />
            </div>
            <button onClick={()=>goTo()}>Go to {siteName}</button>

        </article>
    )
}

export default Cards