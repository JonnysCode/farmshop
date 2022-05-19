import './App.css';
import Dashboard from './components/Dashboard';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "FarmShop - Papst" 
  })

  return (
    <html class="h-full">

      <body class="h-full">
        <Dashboard />
      </body>

    </html>
  );
}

export default App;
