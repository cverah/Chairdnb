import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Card from "../Card/Card";
import "../../utils_css/utils.css";
import "./FeaturedChair.css";
import { useEffect, useState } from "react";
import getCategoriesChair from "../../services/services_categories_chair";
import PropTypes from "prop-types";

const FeaturedChair = ({ link }) => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    const fetchFeatured = async () => {
      const dataFeatured = await getCategoriesChair(link);
      setFeatured(dataFeatured);
    };
    fetchFeatured();
  }, []);

  return (
    <Container>
      <h2 className="text-xl bold">Featured Chairdnb Plus Destinations</h2>
      <p>
        Multi-day pair programming sessions organized by local experts with
        activities, meals and accommodation included
      </p>

      <Grid rows={1} columns={3}>
        {featured.map((feature) => (
          <Card
            key={feature.id}
            flexDirection="column"
            gap="8px"
            alignItems={null}
          >
            <div className="feature-chair">
              <img
                className="width-100"
                src={feature.image_url}
                alt={feature.image_url}
              />
              <p>@</p>
            </div>
            <small className="text-xs">
              More than {feature.verified_stays} verified stays
            </small>
            <p className="text-xs">From {feature.price} € / person - 3 days</p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

FeaturedChair.propTypes = {
  link: PropTypes.string,
};

export default FeaturedChair;
