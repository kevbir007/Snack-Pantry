import React from 'react';
import { Link } from 'react-router-dom';
import './Create.css'

export default class Create extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className='Create'>
                <div className='Create-body-container'>
                    <Link to='/home' style={{textDecoration: 'none'}}>
                        <div className='Create-logo'>SNACK PANTRY</div>
                    </Link>
                    <div className='Progress-container'>
                        <div className='Create-Account-info'>ACCOUNT INFO</div>
                        <div className='Create-dotted-line'>.....................</div>
                        <div className='Create-select-size'>SELECT A SIZE</div>
                        <div className='Create-dotted-line'>.....................</div>
                        <div className='Create-select-length'>SELECT A LENGTH</div>
                        <div className='Create-dotted-line'>.....................</div>
                        <div className='Create-checkout'>CHECKOUT</div>
                    </div>
                    <div className='Create-account-text'>Create Account</div>
                    <div className='Create-mid-container'>
                        <a href='http://localhost:3001/login'>
                            <button className='Login-create-button'>Login/Create</button>
                        </a>
                    </div>
                    <div className='Create-dotted-line-bottom'></div>
                    {/* <Link to='/length'>
                        <div className='Create-back-button-containter'>
                            <div className='Left-arrow'></div>
                            <div className='Create-go-back-button'>GO BACK</div>
                        </div>
                    </Link> */}
                </div>
            </div>
        )
    }
}