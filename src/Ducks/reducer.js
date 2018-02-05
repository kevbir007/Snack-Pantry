import axios from 'axios';

const initialState = {
    Yum_Box:       false,
    Yum_Yum_Box:   false,
    Yum_Year:      false,
    Yum_Month:     false,
    Yum_Yum_Year:  false,
    Yum_Yum_Month: false,
    First_Name:    '',
    Last_Name:     '',
    Country:       '',
    Address:       '',
    City:          '',
    User_State:    '',
    Zip:           ''
}
// 12.83, 14.00, 22.92, 25.00

const UPDATE_SIZE = 'UPDATE_SIZE';
const UPDATE_YUM_LENGTH = 'UPDATE_YUM_LENGTH';
const UPDATE_YUM_YUM_LENGTH = 'UPDATE_YUM_YUM_LENGTH';
const UPDATE_CHECKOUT = 'UPDATE_CHECKOUT';

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_SIZE:
            return Object.assign({}, state, {
                Yum_Box: action.payload.yum_box,
                Yum_Yum_Box: action.payload.yum_yum_box
            });

        case UPDATE_YUM_LENGTH:
            return Object.assign({}, state, {
                Yum_Year: action.payload.yum_year,
                Yum_Month: action.payload.yum_month
            });

        case UPDATE_YUM_YUM_LENGTH:
            return Object.assign({}, state, {
                Yum_Yum_Year: action.payload.yum_yum_year,
                Yum_Yum_Month: action.payload.yum_yum_month
            });

        case UPDATE_CHECKOUT:
            return Object.assign({}, state, {
                First_Name: action.payload.first_name,
                Last_Name: action.payload.last_name,
                Country: action.payload.country,
                Address: action.payload.address,
                City: action.payload.city,
                User_State: action.payload.user_state,
                Zip: action.payload.zip
            })
        default: return state;
    }
}

export function updateSize( yum_box, yum_yum_box ) {
    return {
        type: UPDATE_SIZE,
        payload: { yum_box, yum_yum_box }
    }
}

export function updateYumLength( yum_year, yum_month ) {
    return {
        type: UPDATE_YUM_LENGTH,
        payload: { yum_year, yum_month }
    }
}

export function updateYumYumLength( yum_yum_year, yum_yum_month ) {
    return {
        type: UPDATE_YUM_YUM_LENGTH,
        payload: { yum_yum_year, yum_yum_month }
    }
}

export function updateCheckout( first_name, last_name, country, address, city, user_state, zip ) {
    return {
        type: UPDATE_CHECKOUT,
        payload: { first_name, last_name, country, address, city, user_state, zip }
    }
}

export default reducer