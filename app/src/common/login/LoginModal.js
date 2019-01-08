import React from 'react'
import { Modal, Button } from 'antd'

class LoginModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    handleOnOkModal = () => {

    }

    handleOnCancelModal = () => {
        
    }

    render() {
        return (
            <div>
                <Modal
                    title="Modal"
                    visible={this.state.visible}
                    onOk={this.handleOnOkModal}
                    onCancel={this.handleOnCancelModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                </Modal>
            </div>
        );
    }
}

export default LoginModal