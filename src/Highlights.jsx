//Highlights.jsx
import './Highlights.css'
import me from './images/me.jpg'
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
const Highlights = () => {
    
  useEffect(() => {
    // Initialize the carousel
    let elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }, []);

  return (
    <div className="carousel">
      <a className="carousel-item" style={{width:'300px', height:'300px'}} href="#one!">
        <img src={me} alt='Img 1' />
        <div className='cap'>Image 1</div>
      </a>
      <a className="carousel-item" href="#two!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Img 2" />
        <div className='cap'>Image 2</div>
      </a>
      <a className="carousel-item" href="#three!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Img 3" />
        <div className='cap'>Image 3</div>
      </a>
      <a className="carousel-item" href="#four!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Img 4" />
        <div className='cap'>Image 4</div>
      </a>
      <a className="carousel-item" href="#five!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Img 5" />
        <div className='cap'>Image 5</div>
      </a>
    </div>
  );
}
export default Highlights;