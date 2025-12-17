import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './LandingPage';
import './styles.css';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
