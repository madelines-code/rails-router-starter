# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# starter project winter 2021
This peoject is meant ot be a starting point for homework/projects.
It is a Rails 6 API app with react frontend

# Libraries
- devise_token_auth
- React (v)
- react-router (v6)
- Faker
- Reails (6.1.4)
# setup instructions

### React Router Setup

install react-router-dom
```
$ yarn add react-router-dom
```

setup index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

add routes in App.js
```javascript
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';

function App() {
  return (
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/public' element={<Public/>}/>
  <Route path='/protected' element={<Protected/>}/>
</Routes>
  );
}

export default App;
```

