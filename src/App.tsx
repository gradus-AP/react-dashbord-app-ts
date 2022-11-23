import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { AppRoutes } from './routes';
import { ThemeProvider, createTheme } from '@mui/material';

import Box from '@mui/material/Box';

const theme = createTheme({});

const queryClient = new QueryClient()

function App() {
  return (<>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ display: "flex" }}>
          <Router>
            <AppRoutes />
          </Router>
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  </>);
}

export default App;
