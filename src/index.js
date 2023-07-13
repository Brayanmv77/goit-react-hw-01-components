import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import 'modern-normalize/modern-normalize.css';
import './index.css';

import profile from 'data/profile.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data= {{ profile, data, friends, transactions }} />
  </React.StrictMode>
);
