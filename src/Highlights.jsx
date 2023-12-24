import me from './images/me.jpg'
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './highlights.css'
const Highlights = () => {
    
  useEffect(() => {
    // Initialize the carousel
    let elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }, []);

  return (
    <div className="carousel">
      <a className="carousel-item" style={{width:'300px', height:'300px'}} href="#one!">
        <img src={me} alt="Image 1" />
      </a>
      <a className="carousel-item" href="#two!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Image 2" />
      </a>
      <a className="carousel-item" href="#three!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Image 3" />
      </a>
      <a className="carousel-item" href="#four!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Image 4" />
      </a>
      <a className="carousel-item" href="#five!" style={{width:'300px', height:'300px'}}>
        <img src={me} alt="Image 5" />
      </a>
    </div>
  );
}
export default Highlights;