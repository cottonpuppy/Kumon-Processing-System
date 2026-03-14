import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import ParsePage from "./pages/ParsePage";
import AnalyzePage from "./pages/AnalyzePage";
import GeneratePage from "./pages/GeneratePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ParsePage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}