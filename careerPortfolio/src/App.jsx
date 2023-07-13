import NavBar from "./Components/NavBar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HomePage from "./Components/HomePage";
import "./index.css";
function App() {
  return (
    <>
      <NavBar />
      <Canvas>
        <HomePage />
      </Canvas>
    </>
  );
}

export default App;
