import React from 'react';

import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ page }) => {

    const username = useSelector(({ products }) => products.totalPrice);

    if (!username) return <Navigate to={'/auth'} replace/>;

    return page;

};

export default PrivateRoute;