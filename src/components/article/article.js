import './article.sass';
import * as beans_img from "./../../img/coffee-beans-black.png";
import * as coffee_page_img from "./../../img/coffee-page-article_img.png";
import * as contacts_page_img from "./../../img/contacts-page-article_img.png";

const mainPageArticleContent = () => {
    return (
        <>
            <h1 className='section__header'>About Us</h1>
            <div className='article__bean-img'>
                <img className='beans-black-img' src={beans_img.default} alt="Coffee beans"/>
            </div>
            <div className='main-page-text'>
                <p className='text-content'>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>
                <p className='text-content'>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>
            </div>
        </>
    )
}

const articleContent = (currentPage) => {
    const img = currentPage === 'Our Coffee' ? coffee_page_img : contacts_page_img,
          header = currentPage === 'Our Coffee' ? 'About our beans' : 'About our goods',
          text = currentPage === 'Our Coffee' ? 
            <><p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. </p>
            <p>
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.</p></> 
            : <><p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. </p>
            <p>
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.</p></> 

    return (
        <div className='article__content-sections'>
            <section>
                <img className='article__img' src={img.default} alt="Coffee"/>
            </section>
            <section className='text-section'>
                <h1 className='section__header'>{header}</h1>
                <div className='article__bean-img'>
                    <img className='beans-black-img' src={beans_img.default} alt="Coffee beans"/>
                </div>
                <div className='page-text'>
                    {text}
                </div>
            </section>
        </div>
    )
}

const Article = ({currentPage}) => {
    const content = currentPage === 'Coffee house' ? mainPageArticleContent()
        : articleContent(currentPage);
       
    return (
        <article className='article__content'>
            {content}
        </article>
    );
};

export default Article;