import "./App.css";
import Navbar from "./Components/Navbar";
import Allroutes from "./Pages/Allroutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Allroutes />
    </ThemeProvider>
  );
}

export default App;
