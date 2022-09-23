import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { PRODUCTS } from './dummy-data';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />;
    </div>
  );
}

export default App;
