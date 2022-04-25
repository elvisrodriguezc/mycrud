import React from 'react'
import { AppSettings } from './config/AppSettings';
import { useInitialState } from './hooks/useInitialState';
import './App.css';
import { AppUI } from './AppUI';

function App() {
  const initialState = useInitialState();
  return (
    <AppSettings.Provider value={initialState}>
      <AppUI></AppUI>
    </AppSettings.Provider>
  );
}
export default App;
