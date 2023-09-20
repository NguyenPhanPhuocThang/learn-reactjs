import React, { useState } from 'react';
import {Switch, Route } from 'react-router-dom'
import ListPage from './ListPage';
import DetailPage from './Detailpage';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min.js';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch();

    return (
        
        <div>
            <h1>To do List </h1>
            
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;