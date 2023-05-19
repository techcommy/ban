import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages";
import DetailsPage from "./pages/details";
import Layout from "./components/layout";
import MaterialThemeProvider from "./providers/theme";

const App = () => {
  return (
    <MaterialThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/detail/:id" element={<DetailsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MaterialThemeProvider>
  );
};

export default App;
