import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useState(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className={`app-container ${isPortrait ? 'portrait' : 'landscape'}`}>
        <nav className="menu">
          <div className="logo">🌟</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">포트폴리오 확인</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
