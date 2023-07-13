import ShoppingListContainer from './pages/ShoppingListContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ShoppingListContainer />
    </ThemeProvider>
  );
};

export default App;
