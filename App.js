function App() {
    const [contactSelected, setContactSelected] = useState(false)
    const [categories] = useState([
      {
        name: 'About Me', description: 'Full-Stack Web Developer' },
      { name: 'Portfolio', description: 'My folio' },
      { name: 'Contact', description: 'Contact me' },
      { name: 'Resume', description: 'My resume' },
    ]);
  
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
    return (
      <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
        <main>
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </main>
      </div>
    );
  }
  
  export default App;
  