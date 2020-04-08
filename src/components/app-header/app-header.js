import React from 'react';
import { Badge } from 'reactstrap';

const AppHeader = () => {
    return (
        <div>
            <h1 className="text-info">To do list</h1>
            <h2><Badge color="info" font-size = '1.2rem'>Kristina Pautova</Badge></h2>
        </div>
    )
}

export default AppHeader;