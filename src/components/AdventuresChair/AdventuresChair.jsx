import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Card from "../Card/Card";
import "../../utils_css/utils.css";
import { useEffect, useState } from "react";
import getCategoriesChair from "../../services/services_categories_chair";
import PropTypes from "prop-types";

const AdventuresChair = ({ link }) => {
  const [adventures, setAdventures] = useState([]);
  useEffect(() => {
    const fetchAdventures = async () => {
      const dataAdventures = await getCategoriesChair(link);
      setAdventures(dataAdventures);
    };
    fetchAdventures();
  }, []);

  return (
    <Container>
      <h2 className="text-xl bold">Discover Chairdnb adventures</h2>
      <p>
        Multi-day hackatons organized by local experts with activities, meals
        and accommodation included
      </p>
      <Grid rows={"auto"} columns={6}>
        {adventures.map((adventure) => (
          <Card
            key={adventure.id}
            flexDirection="column"
            gap="8px"
            alignItems={null}
          >
            <img
              className="width-100 border"
              src={adventure.image_url}
              alt={adventure.image_url}
            />
            <small className="text-xs">{`${adventure.country} - ${adventure.name}`}</small>
            <h4>2 Nights PACKAGE All Inclusive</h4>
            <p className="text-xs">
              From {adventure.price} € / person - 3 days
            </p>
            {/* tofixed convierte el 5 a 5.0 ahora es string el valor */}
            <p>{adventure.rating.toFixed(1)} ★</p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

AdventuresChair.propTypes = {
  link: PropTypes.string,
};

export default AdventuresChair;
