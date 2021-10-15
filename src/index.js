import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './project/data/ui/App';
// import App from './project/hooks/App'
// import App from './project/food/App'
// import App from './project/api/01-starting-project/src/App'
// import App from './project/form/01-starting-project/src/App'
// import App from './Real/Nav/App'
// import App from './project/boostrap/App'
// import App from './project/Goals/App'
// import App from './project/youtube/App'
// import App from './project/cardflash/App'
// import App from './project/photo gallery/App'
// import App from './project/bookmanger/App'
// import App from './project/TodoReal/App'
// import App from './project/project manger/App'
// import App from './project/movies/App'
// import App from './project/fuse/App'
// import App from './project/handwritten/App'
import App from './clone/twiter/App'
import 'bootstrap/dist/css/bootstrap.min.css'

// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  
      <React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
      </React.StrictMode>
    
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
