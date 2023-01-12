import React from "react";
import { Route, Routes } from "react-router-dom";

import ThreejsSample from "./pages/threejsSample";
import Material from "./pages/material";
import Light from "./pages/light";
import Shadow from "./pages/shadow";
import Camera from "./pages/camera";
import Fog from "./pages/fog";
import Sprite from "./pages/sprite";
import Group from "./pages/group";
import WorldPosition from "./pages/worldPosition";
import ScreenPosition from "./pages/screenPosition";
import ReadingModel from "./pages/readingModel";
import Layout from "./layout";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Layout>
        <div className="mx-auto container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sample" element={<ThreejsSample />} />
            <Route path="/material" element={<Material />} />
            <Route path="/light" element={<Light />} />
            <Route path="/shadow" element={<Shadow />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/fog" element={<Fog />} />
            <Route path="/sprite" element={<Sprite />} />
            <Route path="/group" element={<Group />} />
            <Route path="/world-position" element={<WorldPosition />} />
            <Route path="/screen-position" element={<ScreenPosition />} />
            <Route path="/reading-model" element={<ReadingModel />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
