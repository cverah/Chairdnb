import Acomodation from "../components/Acomodation/Acomodation";
import AdventuresChair from "../components/AdventuresChair/AdventuresChair";
import ChairPlus from "../components/ChairPlus/ChairPlus";
import ExplorerChair from "../components/ExplorerChair/ExplorerChair";
import FeaturedChair from "../components/FeaturedChair/FeaturedChair";
import Header from "../components/Header/Header";
import HighlyExperiences from "../components/HighlyExperiences/HighlyExperiences";
import SearchForm from "../components/SearchForm/SearchForm";
import PropTypes from "prop-types";

const HomePage = ({ resultDataForm }) => {
  const linkAdventures = "/adventures";
  const linkAcommodations = "/accommodations";
  const linkExperiences = "/experiences";
  const linkFeatured = "/featured";
  return (
    <>
      <Header>
        <SearchForm dataForm={resultDataForm} />
      </Header>
      <ExplorerChair />
      <ChairPlus />
      <AdventuresChair link={linkAdventures} />
      <Acomodation link={linkAcommodations} />
      <HighlyExperiences link={linkExperiences} />
      <FeaturedChair link={linkFeatured} />
    </>
  );
};

HomePage.propTypes = {
  resultDataForm: PropTypes.func,
};

export default HomePage;
