
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
       <Button title="First" appName="React JS Application" />
       <Button title="Second" appName="Vue JS Application" />
       <Button title="Third"  appName="Angular  JS Application" />
       <Button title="Fourth"  appName="React JS Native Application" />
    </div>
  );
}

export default App;
