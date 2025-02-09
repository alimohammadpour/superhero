import React from 'react';
import { Button } from 'antd';
import { NavigateFunction, useNavigate } from 'react-router';
import './App.css';

function App() {
  const navigate: NavigateFunction = useNavigate();

  const onclickNewSuperhero = () => navigate('/superhero');
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Simple React App
        </p>
        <Button
          color="primary" 
          variant="dashed" 
          size="large"
          onClick={onclickNewSuperhero}
          style={{ marginTop: '1%' }}
          >
          New Superhero
        </Button>
      </header>
    </div>
  );
}

export default App;
