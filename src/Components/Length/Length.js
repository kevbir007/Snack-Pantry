import React from 'react';
import { Link } from 'react-router-dom';
import './Length.css';
import {connect} from 'react-redux';
import {updateYumLength} from './../../Ducks/reducer';

class Length extends React.Component {
    constructor(props) {
        super(props);

        this.yumYearSelected = this.yumYearSelected.bind(this);
        this.yumMonthSelected = this.yumMonthSelected.bind(this);
    }

    yumYearSelected() {
        this.props.updateYumLength(true, false)
        console.log('yum year selected')
    }

    yumMonthSelected() {
        this.props.updateYumLength(false, true)
        console.log('yum month selected')
    }

    render() {
        console.log('ARGGG', this.props)
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
                                        onClick={this.yumYearSelected}>PREPAID ONE YEAR
                                    </button>
                                </Link>
                                <div className='Info-container'>
                                    <div className='Price'>PRICE: $12.83</div>
                                    <div className='Total'>TOTAL: $154.00</div>
                                    <div className='Total'>RENEWS</div>
                                    <div className='Total'>ANNUALLY</div>
                                </div>
                            </div>
                            <div className='Month-plan-container'>
                            <Link to='/checkout'>
                                <button className='Plan-button'
                                    onClick={this.yumMonthSelected}>MONTH TO MONTH
                                </button>
                            </Link>
                                <div className='Info-container'>
                                    <div className='Price'>PRICE: $14.00</div>
                                    <div className='Total'>TOTAL: $14.00</div>
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
                        <div className='Selected-pic-1'></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {updateYumLength})(Length)