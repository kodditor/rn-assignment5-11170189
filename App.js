import ThemeProvider from './theme-provider';
import NavigationProvider from './navigation';



export default function App() {

  return (
    <ThemeProvider>
      <NavigationProvider />
    </ThemeProvider>
  );
}
