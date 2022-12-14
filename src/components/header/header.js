import './header.sass';
import * as beans_img from "./../../img/coffee-beans-white.png";

const mainPageHeader = (onPageSelect) => {
    return (
        <>
            <h1 className='header__title main-header'>Everything You Love About Coffee</h1>
            <div className='header__bean-img'>
                <img className='beans-white-img' src={beans_img.default} alt="Coffee beans"/>
            </div>
            <p className='header__text'>
                We makes every day full of energy and taste<br/>
                Want to try our beans?
            </p>
            <button className='header__btn' onClick={() => onPageSelect('Our Coffee')}>
                More
                </button>
        </>
    )
}

const headerClassName = (currentPage) => {
    return currentPage === 'Our Coffee' ? 'coffee-header'
        : 'contacts-header';
}

const Header = ({onPageSelect, currentPage}) => {

    const content  = currentPage === 'Coffee house' ? mainPageHeader(onPageSelect)
        : <h1 className={`header__title ${headerClassName(currentPage)}`}>{currentPage}</h1>;

    return (
        <div className='header'>
            {content}
        </div>
    );
};

export default Header;