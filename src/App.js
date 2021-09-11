import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;

import HEADER from "./components/header/Header.jsx"
import CONTENT from "./components/content/Content.jsx"
  
function App() {
  return (
    <div className="app">
        <HEADER />
        <CONTENT />  
    </div>
  );
}

export default App;
