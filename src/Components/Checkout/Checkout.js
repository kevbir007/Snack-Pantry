import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import {connect} from 'react-redux';
import {updateSize} from './../../Ducks/reducer';
import {updateYumLength} from './../../Ducks/reducer';
import {updateYumYumLength} from './../../Ducks/reducer';
import axios from 'axios';

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            country: '',
            adrs: '',
            city: '',
            user_state: '',
            zip: '',
            Yum_Box: this.props.Yum_Box,
            Yum_Yum_Box: this.props.Yum_Yum_Box,
            Yum_Year: this.props.Yum_Year,
            Yum_Month: this.props.Yum_Month,
            Yum_Yum_Year: this.props.Yum_Yum_Year,
            Yum_Yum_Month: this.props.Yum_Yum_Month,
            size: '',
            duration: ''
        }
        this.whichSize = this.whichSize.bind(this);
        this.whichDuration = this.whichDuration.bind(this);
        this.whichBox = this.whichBox.bind(this);
        this.placeOrderButton = this.placeOrderButton.bind(this);
        this.createUserInfo = this.createUserInfo.bind(this);
        this.createOrder = this.createOrder.bind(this);
    }

    componentDidMount(){
        this.whichSize()
        this.whichDuration()
        this.whichBox()
        this.yumTotal()
        this.yumRecurring()
        this.yumYumTotal()
        this.yumYumRecurring()
    }

    setFirstName(value){
        this.setState({
            first_name: value
        })
    }

    setLastName(value){
        this.setState({
            last_name: value
        })
    }

    setCountry(value){
        this.setState({
            country: value
        })
    }

    setAddress(value){
        this.setState({
            adrs: value
        })
    }

    setCity(value){
        this.setState({
            city: value
        })
    }

    setUserState(value){
        this.setState({
            user_state: value
        })
    }

    setZip(value){
        this.setState({
            zip: value
        })
    }

    whichSize() {
        if(this.props.Yum_Box === true) {
            this.setState({
                size: 'Yum Box'
            })
        } else if(this.props.Yum_Yum_Box === true) {
            this.setState({
                size: 'Yum Yum Box'
            })
        }
    }

    whichDuration() {
        if(this.props.Yum_Year === true || this.props.Yum_Yum_Year === true) {
            this.setState({
                duration: '12 Months'
            })
        } else if(this.props.Yum_Month === true || this.props.Yum_Yum_Month === true) {
            this.setState({
                duration: '1 Month'
            })
        }
    }

    whichBox(){
        console.log('hitting which box function')
        if (this.props.Yum_Box === true){
            console.log('yum box')
            return <div className="Checkout-box-type">Yum Box</div>
        } else if (this.props.Yum_Yum_Box === true){
            console.log('yum yum box')
            return <div className="Checkout-box-type">Yum Yum Box</div>
        }
    }

    yumTotal(){
        if(this.props.Yum_Year === true) {
            return <div className='Box-total-1'>$154.00 ($12.83 /box)</div>
        } else if (this.props.Yum_Month === true){
            return <div className='Box-total-1'>$14.00</div>
        }
    }

    yumRecurring(){
        if(this.props.Yum_Year === true) {
            return <div className='Box-total-1'>$154.00 /year</div>
        } else if (this.props.Yum_Month === true) {
            return <div className='Box-total-1'>$14.00 /month</div>
        }
    }

    yumYumTotal(){
        if(this.props.Yum_Yum_Year === true) {
            return <div className='Box-total-1'>$275.00 ($22.92 /box)</div>
        } else if (this.props.Yum_Yum_Month === true) {
            return <div className='Box-total-1'>$25.00</div>
        }
    }

    yumYumRecurring(){
        if(this.props.Yum_Yum_Year === true) {
            return <div className='Box-total-1'>$275.00 /year</div>
        } else if (this.props.Yum_Yum_Month === true) {
            return <div className='Box-total-1'>$25.00 /month</div>
        }
    }

    createUserInfo() {
        console.log('userinfo fired')
        axios.post(`/api/userInfo`, {
            first_name: this.state.first_name,
            last_name:  this.state.last_name,
            country:    this.state.country,
            adrs:       this.state.adrs,
            city:       this.state.city,
            user_state: this.state.user_state,
            zip:        this.state.zip
        })
        .then((response) => {
        })
        .catch((error) => console.log('error', error))
    }

    createOrder() {
        console.log('createorder fired')
        axios.post(`/api/order`, {
            size: this.state.size,
            duration: this.state.duration
        })
        .then((response) => {
        })
        .catch((error) => console.log('error', error))
    }

    joinAll() {
        axios.put('/api/join', {
            
        })
    }

    placeOrderButton() {
        this.createUserInfo()
        this.createOrder()
    }

    render() {
        console.log('HI im props', this.props)
        console.log(this.state)
        return (
            <div className='Checkout'>
                <div className='Checkout-body-container'>
                    <Link to='/home' style={{textDecoration: 'none'}}>
                        <div className='Checkout-logo'>SNACK PANTRY</div>
                    </Link>
                    <div className='Progress-container'>
                        <div className='Checkout-Account-info'>ACCOUNT INFO</div>
                        <div className='Checkout-dotted-line'>.....................</div>
                        <div className='Checkout-select-size'>SELECT A SIZE</div>
                        <div className='Checkout-dotted-line'>.....................</div>
                        <div className='Checkout-select-length'>SELECT A LENGTH</div>
                        <div className='Checkout-dotted-line'>.....................</div>
                        <div className='Checkout-checkout'>CHECKOUT</div>
                    </div>
                    <div className='Shipping-address-text'>Shipping address</div>
                    <div className='Checkout-info-container'>
                        <div className='Checkout-name-container'>
                            <input className='Checkout-name' placeholder='First name *'
                                type="text" 
                                onChange={e => this.setFirstName(e.target.value)} 
                                value={this.state.first_name}>
                            </input>
                        </div>
                        <div className='Checkout-name-container'>
                            <input className='Checkout-name' placeholder='Last name *'
                                type="text" 
                                onChange={e => this.setLastName(e.target.value)} 
                                value={this.state.last_name}>
                            </input>
                        </div>
                    </div>
                    <div className='Checkout-country'>
                        <select className='Country-input'
                            type="text" 
                            onChange={e => this.setCountry(e.target.value)} 
                            value={this.state.country}>
                            <option value='' selected disabled>--Select a country--</option>
                            <option value='Australia'>Australia</option>
                            <option value='Canada'>Canada</option>
                            <option value='Guam'>Guam</option>
                            <option value='Israel'>Israel</option>
                            <option value='Puerto Rico'>Puerto Rico</option>
                            <option value='United Kingdom'>United Kingdom</option>
                            <option value='United States'>United States</option>
                        </select>
                    </div>
                    <div className='Checkout-address'>
                        <input className='Address-input' placeholder='Address *'
                            type="text" 
                            onChange={e => this.setAddress(e.target.value)} 
                            value={this.state.address}>
                        </input>
                    </div>
                    <div className='City-state-zip-container'>
                        <div className='Checkout-city'>
                            <input className='City-input' placeholder='City *'
                                type="text" 
                                onChange={e => this.setCity(e.target.value)} 
                                value={this.state.city}>
                            </input>
                        </div>
                        <div className='Checkout-state'>
                            <input className='State-input' placeholder='State *'
                                type="text" 
                                onChange={e => this.setUserState(e.target.value)} 
                                value={this.state.user_state}>
                            </input>
                        </div>
                        <div className='Checkout-zip'>
                            <input className='Zip-input' placeholder='ZIP *'
                                type="text" 
                                onChange={e => this.setZip(e.target.value)} 
                                value={this.state.zip}>
                            </input>
                        </div>
                    </div>
                </div>
                <div className='Checkout-lower-body'>
                    <div className='Review-container'>
                        <div className='Review'>Review Order</div>
                        {this.whichBox()}
                        <div className='Subtotal-container'>
                            <div className='Subtotal'>Subtotal</div>
                            <div className='Sub-dotted'></div>
                            {this.yumTotal()}
                            {this.yumYumTotal()}
                        </div>
                        <div className='Shipping-container'>
                            <div className='Subtotal'>Shipping</div>
                            <div className='Sub-dotted'></div>
                            <div className='Box-total'>Free shipping</div>
                        </div>
                        <div className='Recurring-container'>
                            <div className='Subtotal'>Recurring total</div>
                            <div className='Sub-dotted'></div>
                            {this.yumRecurring()}
                            {this.yumYumRecurring()}
                        </div>
                        <button className='Place-order-button' onClick={this.placeOrderButton}>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {updateSize, updateYumLength, updateYumYumLength})(Checkout)