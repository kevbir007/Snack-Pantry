import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default class Home extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className='Home'>
                <div className='Home-body-container'>
                    <div className='Home-header'>
                        <div className="Login-container">
                            <div className="User-icon"></div>
                            <a href='/logout'>
                                <div className='Home-logout'>LOGOUT</div>
                            </a>
                        </div>
                    </div>
                    <div className='Home-logo'>SNACK PANTRY</div>
                <div className='Home-pic-container'>
                    <div className="Home-snack-left"></div>
                    <div className='Slogan-container'>
                        <div className='Slogan-1'>SNACKS FROM</div>
                        <div className='Slogan-2'>a different country</div>
                        <div className='Slogan-3'>DELIVERED MONTHLY</div>
                        <div className='Home-button-container'>
                        <Link to='/size'>
                            <button className='Get-started-button'>GET STARTED</button>
                        </Link>
                            <span className='Home-or'>or</span>
                        <Link to='/size'>
                            <button className='Gift-button'>GIVE AS A GIFT</button>
                        </Link>
                        </div>
                    </div>
                    <div className='Home-snack-right'></div>
                </div>
                <div className='How-it-works-container'>
                    <div className='How-it-works'>HOW IT WORKS</div>
                    <div className='How-it-works-steps-container'>
                        <div className='Home-step-pic-1'></div>
                        <div className='Home-step-pic-2'></div>
                        <div className='Home-step-pic-3'></div>
                    </div>
                    <div className='Home-steps-container'>
                        <div className='Home-step'>Step 1</div>
                        <div className='Dotted-line'></div>
                        <div className='Home-step'>Step 2</div>
                        <div className='Dotted-line'></div>
                        <div className='Home-step'>Step 3</div>
                    </div>
                    <div className='Step-titles-container'>
                        <div className='Step-title'>START YOUR ADVENTURE</div>
                        <div className='Step-title-2'>TRY FLAVORS FROM A NEW COUNTRY</div>
                        <div className='Step-title-3'>KEEP SNACKING AROUND THE WORLD</div>
                    </div>
                    <div className='Step-info-container'>
                        <div className='Step-info'>Travel to a new country every month and discover the best snacks and candies they have to offer!</div>
                        <div className='Step-info'>From rich dark chocolate with tangy orange peels from Greece to zesty tomato chips from Thailand, you never know what you’re going to get inside your box!</div>
                        <div className='Step-info'>Never miss a destination! Your subscription renews automatically at the beginning of every month so you’ll be all set for your next country.</div>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}