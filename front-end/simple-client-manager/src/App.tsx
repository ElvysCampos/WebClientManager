import { AuthProvider } from "./providers/AuthProvider";
import RoutesMain from "./routes/RoutesMain";
import GlobalStyles from "./styledComponents/GlobalStyles";


const App = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};

export default App;
