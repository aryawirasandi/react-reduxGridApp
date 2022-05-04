import { Provider } from "react-redux"
import store from "./app/store";
import Grid  from "./components/Grid";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Grid/>
        <ul>
          <li>
            click once the tile to add color
          </li>
          <li>
            double click to remove the added color
          </li>
        </ul>
      </Provider>
    </div>
  );
}

export default App;
