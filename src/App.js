import { useEffect, useState } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // run authentication logic
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? <SplashScreen /> : <h1>Hello World</h1>}
    </div>
  );
}

export default App;
