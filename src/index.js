import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import "./styles/app.css";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// client side rendered app: react (cra) "cra = create-react-app"
  // --> database, firebase
  // --> react-loading-skeleton
  // --> styling = tailwind

// folder structure
  // src
  // --> components, 
  // --> constants, 
  // --> helpers, 
  // --> hooks,
  // --> pages,
  // --> lib (firebase lives here), 
  // --> services (fireebase functions here),
  // --> styles (tailwind folder (app and tailwind))



  // https://www.youtube.com/watch?v=mDgEqoQUBgk&t=765s
  //  this is the site to watch what is happening there.