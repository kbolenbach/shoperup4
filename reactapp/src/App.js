import { UnorderedList } from './components/UnorderedList/UnorderedList';
import { ListElement } from './components/ListElement/ListElement';


function App() {
  return (
    <div className="App">
      <UnorderedList arrayElements={["Alaa", "ma", "kota", "a", "ja", "nie"]}>

        <ListElement />

      </UnorderedList>
    </div>
  );
}

export default App;

