import './App.css';
import { PopularItems } from './components/Popular/PopularItems';
import { Banner } from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { NewsBlock } from './components/News/NewsBlock';
import { Search } from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <div className="wrap-top">
        <NewsBlock />
      </div>
      <Menu />
      <Search />
      <Banner />
      <PopularItems />
    </div>
  );
}

export default App;
