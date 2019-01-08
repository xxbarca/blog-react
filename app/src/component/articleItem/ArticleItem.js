import React from 'react'
import './ArticleItem.scss'

class ArticleItem extends React.Component {
    render() {
        return (
            <div id='articleItem'>
                <a className='title' href="#">js 实现上下改变父 div 的高度，左右上下动态分割孩子的宽高</a>
                <p className='introduction'>js 实现父 div 里面 左右，上下动态分割 div，并上下改变父 div 的高度，并且宽和高都是按百分比</p>
            </div>
        );
    }
}

export default ArticleItem;