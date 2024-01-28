import "./App.css";
import Navbar from "./Components/Navbar";
import Allroutes from "./Pages/Allroutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ChakraProvider } from "@chakra-ui/react";
const theme = createTheme();

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Allroutes />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
