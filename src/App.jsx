import Box from "./components/Box";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    {/* application elements */}
    <Box ml={64} color="white" bg="navy">
      Blue Box
    </Box>
  </ThemeProvider>
);

export default App;