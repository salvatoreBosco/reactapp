import Cards from './Cards'
import social from '../dataSocial';
import MyNav from "./MyNav";
import Home from "./Home"
import '../css/App.css'
function App() {
  return (
    <div className="App">
      <nav>
        <MyNav></MyNav>
      </nav>
      <Home></Home>
      <section id='my-links' className='card-section'>
        {
          social.map((social)=>{
            const {id} = social
            return <Cards key={id} {...social}/>
          })
        }
      </section>
    </div>
  );
}

export default App;
