import Cards from './Cards'
import social from '../dataSocial';
import MyNav from "./MyNav";
import Home from "./Home"
import '../css/App.css'
function App() {

  function f() {
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
  }
  window.addEventListener('load', f)

  return (
    <div className="App">
      <nav className='my-nav'>
        <MyNav></MyNav>
      </nav>
      <Home></Home>
      <section id='my-links' className='card-section'>
        {
          social.map((social) => {
            const { id } = social
            return <Cards key={id} {...social} />
          })
        }
      </section>
    </div>
  );
}

export default App;
