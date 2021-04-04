
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    //BEM
    <div className='app'>
      {/* Sidebar(left side) */}
      <Sidebar />
      {/* Feed (Where all content is)*/}
      <Feed />

      {/* Widgets(widgets on right side) */}
      <Widgets />
    </div>
  );
}

export default App;
