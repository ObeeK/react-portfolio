import React, { useState } from 'react';
import Header from './components/Header';
import CurrentPage from './components/Current';

function App() {
    const [categories] = useState([
      { name: 'About Me', description: 'Full-Stack Web Developer' },
      { name: 'Projects', description: 'My portfolio' },
      { name: 'Contact', description: 'Contact me' },
    ]);
  
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
    return (
      <div>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Header>
        <main>
          <CurrentPage
          currentCategory={currentCategory}></CurrentPage>
        </main>
      </div>
    );
  }
  
  export default App;
  