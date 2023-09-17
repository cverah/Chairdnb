import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Card from "../Card/Card";
import "../../utils_css/utils.css";
import { useEffect, useState } from "react";
import getCategoriesChair from "../../services/services_categories_chair";
import "./Acomodation.css";
import PropTypes from "prop-types";

const Acomodation = ({ link }) => {
  const [accommodations, setAccommodations] = useState([]);
  useEffect(() => {
    const fetchAccommodations = async () => {
      const dataAccommodations = await getCategoriesChair(link);
      setAccommodations(dataAccommodations);
    };
    fetchAccommodations();
  }, []);

  return (
    <Container>
      <h2 className="text-xl bold">Accommodation around the world</h2>

      <Grid rows={"auto"} columns={4}>
        {accommodations.map((accommodation) => (
          <Card
            key={accommodation.id}
            flexDirection="column"
            gap="8px"
            alignItems={null}
          >
            <img
              className="width-100 border"
              src={accommodation.image_url}
              alt={accommodation.image_url}
            />
            <div className="flex aligns-center justify-between">
              <div className="accomodation-content">
                <button>SUPERSHOTS</button>
                <p>{`${accommodation.country} - ${accommodation.name}`}</p>
              </div>
              <div className="accomodation-rating">
                <p>★ {accommodation.rating.toFixed(2)}</p>
              </div>
            </div>
            <p className="text-xs">
              From {accommodation.price} € / person - 3 days
            </p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

Acomodation.propTypes = {
  link: PropTypes.string,
};

export default Acomodation;
