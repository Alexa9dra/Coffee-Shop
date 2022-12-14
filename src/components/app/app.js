import { Component } from 'react';

import productData from '../../data.json';

import NavBar from '../nav-bar/nav-bar';
import Header from '../header/header';
import Article from '../article/article';
import BestCoffeeSection from '../best-coffee-section/best-coffee-section';

import './app.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: ['Coffee house', 'Our Coffee', 'For your pleasure'],
            currentPage: 'Coffee house',
            currentItemId: ''
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
        const {pages, currentPage, currentItemId} = this.state;

        return (
            <div className='app'>
                <NavBar
                    pages = {pages}
                    onPageSelect = {this.onPageSelect}
                    currentPage = {currentPage}/>
                <Header
                    onPageSelect = {this.onPageSelect}
                    currentPage = {currentPage}/>
                {currentItemId === '' ? 
                    <><Article
                        currentPage = {currentPage}/>
                    {currentPage === 'Coffee house' ? 
                    <BestCoffeeSection
                        data = {productData}/>
                    : null}
                    </>
                    : null}

            </div>
    );}
};

export default App;