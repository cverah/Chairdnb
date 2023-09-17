import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Card from "../Card/Card";
import "../../utils_css/utils.css";
import sala from "../../assets/sala.png";
import "./ChairPlus.css";

const ChairPlus = () => {
  return (
    <Container>
      <h2 className="text-xl bold">Chairdnb Plus accommodation</h2>
      <p>
        A selection of accommodation verified according to quality and
        connectivity criteria
      </p>
      <Grid rows={0} columns={1}>
        <Card flexDirection="row" gap="8px" alignItems="center">
          <div className="chair-plus">
            <img className="width-100" src={sala} alt="playa.png" />
            <div className="chair-plus-content-image">
              <p className="">@</p>
              <button>Discover Accomodation</button>
            </div>
          </div>
        </Card>
      </Grid>
    </Container>
  );
};

export default ChairPlus;
