import React from 'react';
import { Link } from 'react-router-dom';
import './Length2.css';
import {connect} from 'react-redux';
import {updateYumYumLength} from './../../Ducks/reducer';

class Length2 extends React.Component {
    constructor(props) {
        super(props);

        this.yumYumYearSelected = this.yumYumYearSelected.bind(this);
        this.yumYumMonthSelected = this.yumYumMonthSelected.bind(this);
    }

    yumYumYearSelected() {
        this.props.updateYumYumLength(true, false)
        console.log('yum year selected')
    }

    yumYumMonthSelected() {
        this.props.updateYumYumLength(false, true)
        console.log('yum month selected')
    }

    render() {
        return (
            <div className='Length'>
                <div className='Length-body-container'>
                    <Link to='/home' style={{textDecoration: 'none'}}>
                        <div className='Length-logo'>SNACK PANTRY</div>
                    </Link>
                    <div className='Progress-container'>
                        <div className='Length-Account-info'>ACCOUNT INFO</div>
                        <div className='Length-dotted-line'>.....................</div>
                        <div className='Length-select-size'>SELECT A SIZE</div>
                        <div className='Length-dotted-line'>.....................</div>
                        <div className='Length-select-length'>SELECT A LENGTH</div>
                        <div className='Length-dotted-line'>.....................</div>
                        <div className='Length-checkout'>CHECKOUT</div>
                    </div>
                    <div className='Select-length-text'>Select a length</div>
                    <div className='Length-mid-container'>
                        <div className='Length-plan-container'>
                            <div className='Year-plan-container'>
                                <Link to='/checkout'>
                                    <button className='Plan-button'
                                        onClick={this.yumYumYearSelected}>PREPAID ONE YEAR
                                    </button>
                                </Link>
                                <div className='Info-container'>
                                    <div className='Price'>PRICE: $22.92</div>
                                    <div className='Total'>TOTAL: $275.00</div>
                                    <div className='Total'>RENEWS</div>
                                    <div className='Total'>ANNUALLY</div>
                                </div>
                            </div>
                            <div className='Month-plan-container'>
                                <Link to='/checkout'>
                                    <button className='Plan-button'
                                    onClick={this.yumYumMonthSelected}>MONTH TO MONTH
                                    </button>
                                </Link>
                                <div className='Info-container'>
                                    <div className='Price'>PRICE: $25.00</div>
                                    <div className='Total'>TOTAL: $25.00</div>
                                    <div className='Total'>RENEWS</div>
                                    <div className='Total'>ANNUALLY</div>
                                </div>
                            </div>
                            <Link to='/size'>
                                <div className='Back-button-containter'>
                                    <div className='Left-arrow'></div>
                                    <div className='Length-go-back-button'>GO BACK</div>
                                </div>
                            </Link>
                        </div>
                        <div className='Selected-pic-2'></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {updateYumYumLength})(Length2)