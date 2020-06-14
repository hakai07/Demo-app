import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const render = () => {
      document.getElementById('root2').innerHTML = `
                <div class="time-div">This is Vanilla JS<br>
                <p>${new Date().toLocaleTimeString()}</p>
                </div>
                `;
      ReactDOM.render(
        <React.StrictMode>
          <App/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}
setInterval(render, 1000);
