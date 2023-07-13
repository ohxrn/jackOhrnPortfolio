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
      <Canvas style={{ height: "50vh", width: "100%" }}>
        <HomePage />
      </Canvas>
      <ManageHome />
    </>
  );
}

export default App;
