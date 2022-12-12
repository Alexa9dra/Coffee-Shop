import './coffee-house.sass';
import * as beans_img from "./../../img/coffee-beans-light.png";

const CoffeHouse = ({onPageSelect}) => {
   
    return (
        <div className='header'>
            <h1 className='header__title'>Everything You Love About Coffee</h1>
            <div className='header__img'>
                <img className='beans-img' src={beans_img.default} alt="Coffee beans"/>
            </div>
            <p className='header__text'>
                We makes every day full of energy and taste<br/>
                Want to try our beans?
            </p>
            <button className='header__btn' onClick={() => onPageSelect('Our coffee')}>
                More
                </button>
        </div>
    );
};

export default CoffeHouse;