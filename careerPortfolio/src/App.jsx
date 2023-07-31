import NavBar from "./Components/NavBar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HomePage from "./Components/HomePage";
import { ManageHome } from "./Components/ManageHome";
import "./index.css";
function App() {
  return (
    <>
      <NavBar />
      <div className="canvas-container">
        <Canvas>
          <HomePage />
        </Canvas>
      </div>
      <ManageHome />
    </>
  );
}

export default App;
