import React from 'react'
import { BrowserRouter,  Route } from "react-router-dom";
import ListPage  from './components/ListPage/ListPage'
import UserPage from './components/UserPage/UserPage';


const App = () => {
    return (
    <div>
        <BrowserRouter>            
            <Route path="/users/:uid" component={UserPage}/>
            <Route exact path="/" component={ListPage}/>
        </BrowserRouter>
    </div>
        )

}

export default App;