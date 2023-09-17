import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  //state results formualrio
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <>
      <HomePage resultDataForm={setSearchResults} />
    </>
  );
}

export default App;
