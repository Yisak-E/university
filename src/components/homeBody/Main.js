import React from 'react';
import './Main.css';
import Features from '../features/Features';
import Footer from '../footer/Footer';

function Main() {
  return (
    <div className="main">
      <h1>Welcome to the Main Component</h1>
      <p>This is the main content area.</p>
      <Features />
      <Footer />

    </div>
  );
}
export default Main;