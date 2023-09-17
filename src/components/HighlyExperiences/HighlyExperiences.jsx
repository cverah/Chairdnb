import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Card from "../Card/Card";
import "../../utils_css/utils.css";
import { useEffect, useState } from "react";
import getCategoriesChair from "../../services/services_categories_chair";
import PropTypes from "prop-types";

const HighlyExperiences = ({ link }) => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const fetchExperiences = async () => {
      const dataExperiences = await getCategoriesChair(link);
      setExperiences(dataExperiences);
    };
    fetchExperiences();
  }, []);

  return (
    <Container>
      <h2 className="text-xl bold">Highly rated experiences</h2>
      <p>
        Multi-day extreme programming sessions organized by local experts with
        activities, meals and accommodation included
      </p>
      <Grid rows={0} columns={6}>
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            flexDirection="column"
            gap="8px"
            alignItems={null}
          >
            <img
              className="width-100 border"
              src={experience.image_url}
              alt={experience.image_url}
            />
            <small className="text-xs">{`${experience.country} - ${experience.name}`}</small>
            <h4>2 Nights PACKAGE All Inclusive</h4>
            <p className="text-xs">
              From {experience.price} € / person - 3 days
            </p>
            <p>{experience.rating.toFixed(1)} ★</p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

HighlyExperiences.propTypes = {
  link: PropTypes.string,
};

export default HighlyExperiences;
