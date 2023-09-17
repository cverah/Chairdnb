import Card from "../components/Card/Card";
import Container from "../components/Container/Container";
import Grid from "../components/Grid/Grid";
import Header from "../components/Header/Header";
import "./SearchResultsPage.css";
import PropTypes from "prop-types";

const SearchResultsPage = ({ resultSearch, where, active }) => {
  function ancorBack() {
    active(true);
  }

  return (
    <>
      <Header>
        <div className="search-result-back">
          <a onClick={ancorBack}> {`<- Back`} </a>
        </div>
        <div className="search-result-header">
          <p>SEARCH RESULTS FOR {where.toUpperCase()}</p>
        </div>
      </Header>
      <Container>
        <Grid rows={"auto"} columns={6}>
          {resultSearch.map((chair) => (
            <Card
              key={chair.id}
              flexDirection="column"
              gap="8px"
              alignItems={null}
            >
              <img
                className="width-100 border"
                src={chair.image_url}
                alt={chair.image_url}
              />
              <small className="text-xs">{`${chair.country} - ${chair.name}`}</small>
              <h4>2 Nights PACKAGE All Inclusive</h4>
              <p className="text-xs">From {chair.price} € / person - 3 days</p>
              {/* tofixed convierte el 5 a 5.0 ahora es string el valor */}
              <p>{chair.rating.toFixed(1)} ★</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

SearchResultsPage.propTypes = {
  resultSearch: PropTypes.array,
  where: PropTypes.string,
  active: PropTypes.func,
};

export default SearchResultsPage;
