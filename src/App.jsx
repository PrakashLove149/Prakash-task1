
import './App.css';
import Sidebar from './components/Sidebar';
import DeletedCards from './components/DeletedCards';

function App() {
  return (
    <div className="flex h-screen bg-slate-200">
      <Sidebar/>
      <DeletedCards />
    </div>
  );
}

export default App;
