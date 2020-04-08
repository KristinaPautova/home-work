import React from 'react';

import AppHeader from '../app-header';
import PostList from '../post-list';


const App = () => {

    const data = [
        {label: 'Сходить в магазин', important: true, id: 1},
        {label: 'Изучать React', important: false, id: 2},
        {label: 'Навестить к бабушке', important: false, id: 3},
        {label: 'Обнять Жужу', important: false, id: 3},
        {label: 'Научиться готовить', important: false, id: 3}
    ]
    return (
       <div>
            <AppHeader/>
            <PostList posts={data}/>
       </div>
    )
}

export default App;