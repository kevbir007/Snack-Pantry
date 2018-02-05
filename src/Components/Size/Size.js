import React from 'react';
import { Link } from 'react-router-dom';
import './Size.css';
import {connect} from 'react-redux';
import {updateSize} from './../../Ducks/reducer';

class Size extends React.Component {
    constructor(props) {
        super(props);

        this.yumSizeSelection = this.yumSizeSelection.bind(this);
        this.yumYumSizeSelection = this.yumYumSizeSelection.bind(this);
    }

    yumSizeSelection() {
        this.props.updateSize(true, false)
        console.log('yum size selected')
    }

    yumYumSizeSelection() {
        this.props.updateSize(false, true)
        console.log('yum yum size selected')
    }

    render() {
        console.log('grab MY EYE!!!!', this.props)
        return (
            <div className='Size'>
                <div className='Size-body-container'>
                    <Link to='/home' style={{textDecoration: 'none'}}>
                        <div className='Size-logo'>SNACK PANTRY</div>
                    </Link>
                    <div className='Progress-container'>
                        <div className='Size-Account-info'>ACCOUNT INFO</div>
                        <div className='Size-dotted-line'>.....................</div>
                        <div className='Size-select-size'>SELECT A SIZE</div>
                        <div className='Size-dotted-line'>.....................</div>
                        <div className='Size-select-length'>SELECT A LENGTH</div>
                        <div className='Size-dotted-line'>.....................</div>
                        <div className='Size-checkout'>CHECKOUT</div>
                    </div>
                    <div className='Size-select-a-size'>Select a size</div>
                    <div className='Mid-container'>
                        <div className='Size-left-pic'></div>
                        <div className='Size-yum-box-container'>
                            <div className='Size-yum-box-text'>YUM BOX</div>
                            <div className='Yum-box-info-container'>
                                <div className='First-check'></div>
                                <div className='First-check-info'>6+ snacks in every box</div>
                            </div>
                            <div className='Yum-box-info-container'>
                                <div className='First-check'></div>
                                <div className='First-check-info'>8 page booklet with trivia & games</div>
                            </div>
                            <div className='Yum-box-info-container'>
                                <div className='First-check'></div>
                                <div className='First-check-info'>FREE activity sheet in every box</div>
                            </div>
                            <div className='Yum-box-info-container'>
                                <div className='First-check'></div>
                                <div className='First-check-info'>FREE shipping</div>
                            </div>
                            <Link to='/length'>
                                <button className='Size-select-button' 
                                    onClick={this.yumSizeSelection}>SELECT
                                </button>
                            </Link>
                        </div>
                        <div className='Dotted-line-container'>
                            <div className='Size-border'></div>
                            <div className='Size-or-text'>or</div>
                            <div className='Size-border'></div>
                        </div>
                        <div className='Size-yum-yum-box-container'>
                            <div className='Size-yum-yum-box-text'>YUM YUM BOX</div>
                            <div className='Yum-box-info-container'>
                                <div className='First-check'></div>
                                <div className='First-check-info'>12+ snacks in every box</div>
                            </div>
                            <div className='Yum-box-info-container'>
                                <div className='First-check'></div>
                                <div className='First-check-info'>12 page booklet with trivia & games</div>
                            </div>
                            <div className='Yum-box-info-container'>
                                <div className='First-check'></div>
                                <div className='First-check-info'>FREE activity sheet in every box</div>
                            </div>
                            <div className='Yum-box-info-container'>
                                <div className='First-check'></div>
                                <div className='First-check-info'>FREE shipping</div>
                            </div>
                            <Link to='/length2'>
                                <button className='Size-select-button-2'
                                    onClick={this.yumYumSizeSelection}>SELECT
                                </button>
                            </Link>
                        </div>
                        <div className='Size-right-pic'></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {updateSize})(Size)