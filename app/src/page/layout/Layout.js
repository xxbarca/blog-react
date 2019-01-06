import React from 'react';
import NavTop from '../nav-top/NavTop'
import NavSide from '../nav-side/NavSide'
import './Layout.scss'
class Layout extends React.Component {
    render() {
        return (
            <div id='layout'>
                <NavTop />
                <div className='contant'>
                        {this.props.children}
                    <NavSide />
                </div>
                
            </div>
        );
    }
}

export default Layout;