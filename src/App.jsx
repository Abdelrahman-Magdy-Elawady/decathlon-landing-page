import LandingPage from "./Pages/LandingPage/LandingPage";
import { useGsapConfig } from "./CutomHooks/useGsapConfig";
export default function App() {
  useGsapConfig();
  return (
    <div>
      <LandingPage />
    </div>
  );
}
