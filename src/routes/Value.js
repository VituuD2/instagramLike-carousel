import React from 'react'
import { Link } from 'react-router-dom';
import '../style/PagesDefault.css';

const Value = () => {
  return (
    <div className="Value">
        <h1>Value Agência</h1>

            <div className="main">
                <div className="Button">
                    <Link to="/FirstV">1st Carousel</Link>
                </div>
                <div className="Button">
                    <Link to="/SecondV">2nd Carousel</Link>
                </div>
            </div>

        <div className='Button'><Link to="/"><i class="fas fa-long-arrow-left"></i></Link></div>
    </div>
  )
}
export default Value