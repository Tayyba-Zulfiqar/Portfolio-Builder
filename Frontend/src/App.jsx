import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing-Page/LandingPage";
import TemplatesList from "./Pages/Templates-Page/TemplatesList";
import TemplatePreview from "./Pages/Templates-Page/TemplatePreview";
import PortfolioForm from "./Pages/Portfolio-Page/PortfolioForm";
import PortfolioPreview from "./Pages/Portfolio-Page/PortfolioPreview";
import PortfolioEdit from "./Pages/Portfolio-Page/PortfolioEdit";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/PageNotFound/NotFound";
import AuthPage from "./Pages/Auth-Page/AuthPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* COMPLETED*/}
      <Route path="/authenticate" element={<AuthPage />} /> {/* COMPLETED*/}
      <Route path="/templates" element={<TemplatesList />} /> {/*COMPLETED*/}
      <Route path="/templates/:templateId" element={<TemplatePreview />} />
      <Route path="/portfolio/new/:templateId" element={<PortfolioForm />} />
      <Route
        path="/portfolio/:portfolioId/preview"
        element={<PortfolioPreview />}
      />
      <Route path="/portfolio/:portfolioId/edit" element={<PortfolioEdit />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
