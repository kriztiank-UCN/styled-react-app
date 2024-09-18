import Box from "./components/Box";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    {/* application elements */}
    <Box color="black" bg="navy">
      Blue Box
    </Box>
  </ThemeProvider>
);

export default App;