import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Size from './Components/Size/Size';
import Length from './Components/Length/Length';
import Length2 from './Components/Length/Length2';
import Create from './Components/Create/Create';
import Checkout from './Components/Checkout/Checkout';
import Thanks from './Components/Thanks/Thanks';

export default (
    <HashRouter>
        <div>
            <Route exact path="/"   component={ Create } />
            <Route path="/home"     component={ Home } />
            <Route path="/size"     component={ Size } />
            <Route path="/length"   component={ Length } />
            <Route path="/length2"  component={ Length2 } />
            <Route path="/checkout" component={ Checkout } />
            <Route path="/thanks"   component={ Thanks } />
        </div>
    </HashRouter>
)