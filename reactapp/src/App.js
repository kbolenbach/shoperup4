import { ThemeContextProvider } from './context/theme-context-provider.js';
import { RouterProvider } from 'react-router-dom';
import { ROUTER_ROUTES } from "./pages/routing.js";



function App() {
  return (

    <ThemeContextProvider>
        <RouterProvider router={ROUTER_ROUTES}/>
    </ThemeContextProvider>
  );
}

export default App;
