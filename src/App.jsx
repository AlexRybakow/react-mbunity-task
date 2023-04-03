import React, { useState }  from 'react';
import { Main } from './components/Main/PageBody/Page';
import { Footer } from './components/Footer/Footer';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { Header } from './components/Header/Header';


const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpened(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseMenu = () => {
    setMenuOpened(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="App">
    <Header openMenu={handleOpenMenu} />
    <MobileMenu isMenuOpened={menuOpened} closeMenu={handleCloseMenu} />
    <Main />
    <Footer />
  </div>
  );
}

export default App;
