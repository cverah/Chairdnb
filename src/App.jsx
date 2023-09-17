import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  //para navegacion
  const navigate = useNavigate();
  // console.log(navigate);
  //state results
  const [searchResults, setSearchResults] = useState([]);
  //state para obtner el name del formulario
  const [getwhere, setGetWhere] = useState("");

  //state ancor
  const [ancorActive, setAncorActive] = useState(false);

  useEffect(() => {
    if (searchResults.length >= 1) {
      navigate("/search");
    }
  }, [searchResults, navigate]);

  useEffect(() => {
    if (ancorActive) {
      navigate("/");
      window.location.reload();
    }
  }, [ancorActive, navigate]);

  // useEffect(() => {
  //   navigate("/");
  // }, [ancorActive, navigate]);

  return (
    <>
      <Routes>
        {searchResults.length >= 1 ? (
          <Route
            path="/search"
            element={
              <SearchResultsPage
                resultSearch={searchResults}
                where={getwhere}
                active={setAncorActive}
              />
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <HomePage
                resultDataForm={setSearchResults}
                getwhere={setGetWhere}
              />
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
