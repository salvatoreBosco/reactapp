import React from 'react'
import '../css/Home.css'
function Home() {
    console.log('home')
    //elements
    var elements_to_watch = document.querySelectorAll('.watch')

    //callback
    var callback = function (items) {
        items.forEach((item) => {
            if (item.isIntersecting) {
                item.target.classList.add("in-page")
            } else {
                item.target.classList.remove("in-page")
            }
        });
    }

    //observe
    var observe = new IntersectionObserver(callback, { threshold: 0.6 });

    //apply
    elements_to_watch.forEach((element) => {
        observe.observe(element);
    })
    return <>
        <div id='home'>
            <div className='section watch'>
                <h1 className='title'>Hi, I'm...</h1>
            </div>
            <div className='section watch'>
                <h1 className='title'>Salvatore Bosco</h1>
            </div>
            <div className='section watch'>
                <h1 className='title'>Computer Engineering student at the...</h1>
            </div>
            <div className='section watch'>
                <h1 className='title'>Politecnico di Milano</h1>
            </div>
            <div className='section watch'>
                <h1 className='title'>Discover my world!</h1>
            </div>
        </div>+
    </>
}

export default Home