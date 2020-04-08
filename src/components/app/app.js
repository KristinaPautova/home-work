import React from 'react';

import AppHeader from '../app-header';
import PostList from '../post-list';

import './app.css';

const App = () => {

    const data = [
        {label: 'Сходить в магазин', important: true, id: 1},
        {label: 'Изучать React', important: false, id: 2},
        {label: 'Навестить к бабушке', important: false, id: 3},
        {label: 'Обнять Жужу', important: false, id: 3},
        {label: 'Научиться готовить', important: false, id: 3}
    ]
    return (
       <div className="app">
            <AppHeader/>
            <PostList posts={data}/>
       </div>
    )
}

export default App;