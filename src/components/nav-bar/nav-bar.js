import './nav-bar.sass';

const createBtn = (clazz, item, onPageSelect) => {
    return (
        <button 
            className={`navbar-btn ${clazz}`}
            key={item}
            onClick={() => onPageSelect(item)}>
                {item}
        </button>
    );
};

const NavBar = ({onPageSelect, currentPage, pages}) => {
    const buttons = pages.map((item) => {
                const active = currentPage === item,
                    clazz = active ? 'navbar-btn-active' : '';
                                
                return createBtn(clazz, item, onPageSelect)});
   
    return (
        <div className='navbar'>
            {buttons}
        </div>
    );
};

export default NavBar;