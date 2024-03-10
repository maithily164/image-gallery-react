import './App.css';
import Search from './components/search/Search';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider >
      <div className="App">
        <Search />
      </div>
    </MuiThemeProvider>

  );
}

export default App;
