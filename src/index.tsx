import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<div>Hello</div>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let a = {
  name: 'Mike',
  age: 10,
  address: {
    city: 'Ekb',
    country: 'Russia',
  },
};

let users = [
  {
    name: 'Mike',
    age: 10,
    address: {
      city: 'Ekb',
      country: 'Russia',
    },
  },
  {
    name: 'John',
    age: 13,
    address: {
      city: 'Ekb',
      country: 'Russia',
    },
  },
];

let b: Array<string | number | boolean>;
b = [1, 2, 3, 4, 5];
b = [];
b = [1, 2, 'n', '3', '3'];
b = [true, false];

console.log(users[0].address.country);
