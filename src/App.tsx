import { Route, Routes } from 'react-router-dom'
import { ItemsPage } from './pages/ItemsPage';
import { ChartsPage } from './pages/ChartsPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <ItemsPage /> }/>
        <Route path="/charts" element={ <ChartsPage /> }/>
      </Routes>    
    </>
  )
}

export default App;
