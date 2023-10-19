import logo from './logo.svg';
import './App.css';
import Banner from './Banner';

function App() {
  return (
    <div className="max-h-screen bg-gray-200">
      <Banner message="Hello" />
      <div className="p-4">
        {/* Your content here */}
      </div>
    </div>
  );
}

export default App;
