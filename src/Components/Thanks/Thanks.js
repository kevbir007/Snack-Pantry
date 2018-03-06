import React from 'react';
import { Link } from 'react-router-dom';
import './Thanks.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateCheckout} from './../../Ducks/reducer';

class Thanks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_info: []
        }

        this.presentJoin = this.presentJoin.bind(this)
    }

    presentJoin() {
        console.log('createorder fired')
        axios.get(`/api/join/`, {

        })
        .then((response) => {
            console.log('this is the response', response)
            this.setState({
                user_info: response.data
            })
        })
        .catch((error) => console.log('error', error))
    }

    componentDidMount(){
        this.presentJoin()
    }

    render() {
        console.log(this.props)
        return (
            <div className="Thanks">
                <Link to='/home' style={{textDecoration: 'none'}}>
                        <div className='Thanks-logo'>SNACK PANTRY</div>
                </Link>
                <div className='Thank-you-message'>Thank you!</div>
                <Link to='/home' style={{textDecoration: 'none'}}>
                    <button className='Return-home-button'>Return Home</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {updateCheckout})(Thanks)