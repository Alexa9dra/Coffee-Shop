import { Component } from 'react';

import NavBar from '../nav-bar/nav-bar';
import CoffeHouse from '../coffee-house/coffee-house';

import './app.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'Coffee house'
        }
    }

    onPageSelect = (currentPage) => {
        this.setState({currentPage});
        this.scrollUp();
    }

    scrollUp = () => {
        window.scrollTo({
            top: 0
        });
    };

    render() {
        const {currentPage} = this.state;

        return (
            <div className='app'>
                <NavBar
                    onPageSelect = {this.onPageSelect}
                    currentPage = {currentPage}/>
                {this.state.currentPage==='Coffee house'?
                    <CoffeHouse
                    onPageSelect = {this.onPageSelect}/>
                    :null}
                {this.state.currentPage === 'Our coffee' ? 
                    <div>Hello</div> 
                    : null}
            </div>
    );}
};

export default App;