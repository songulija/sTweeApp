
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
  return (
    //BEM
    <div className='App'>
      {/* Sidebar(left side) */}
      <Sidebar />
      {/* Feed (Where all content is)*/}
      <Feed />

      {/* Widgets(widgets on right side) */}
    </div>
  );
}

export default App;
