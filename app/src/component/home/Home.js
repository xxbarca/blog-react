import React from 'react';
import ArticleItem from '../articleItem/ArticleItem'
import './Home.scss';

class Home extends React.Component{
    render() {
        return (
            <div id='home'>
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
            </div>
        )
    }
}

export default Home;