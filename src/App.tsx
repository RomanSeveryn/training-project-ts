import React from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import UserPage from "./component/UserPage";
import TodosPage from "./component/TodosPage";

function App() {
    
  return (

    <BrowserRouter>
        <div>
            <NavLink to="/user" style={{margin: '12px'}}>
                user
            </NavLink>
            <NavLink to="/todos" style={{margin: '12px'}}>
                todos
            </NavLink>
        </div>
        <Route path="/user">
            <UserPage/>
        </Route>
        <Route path="/todos">
            <TodosPage/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
