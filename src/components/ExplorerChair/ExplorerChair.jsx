import Card from "../Card/Card";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import playa from "../../assets/playa.png";
import sunset from "../../assets/sunset.png";
import nigth from "../../assets/nigth.png";

import "../../utils_css/utils.css";
const ExplorerChair = () => {
  return (
    <Container>
      <h2 className="text-xl bold">Explorer Chairdnb</h2>
      <Grid rows={1} columns={3}>
        <Card flexDirection="row" gap="8px" alignItems="center">
          <img className="width-75 border-type-c" src={playa} alt="playa.png" />
          <p className="width-100">Accommodations</p>
        </Card>
        <Card flexDirection="row" gap="8px" alignItems="center">
          <img
            className="width-75 border-type-c"
            src={sunset}
            alt="sunset.png"
          />
          <p className="width-100">Experiences</p>
        </Card>
        <Card flexDirection="row" gap="8px" alignItems="center">
          <img className="width-75 border-type-c" src={nigth} alt="nigth.png" />
          <p className="width-100">Adventures</p>
        </Card>
      </Grid>
    </Container>
  );
};

export default ExplorerChair;
