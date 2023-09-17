import Acomodation from "../components/Acomodation/Acomodation";
import AdventuresChair from "../components/AdventuresChair/AdventuresChair";
import ChairPlus from "../components/ChairPlus/ChairPlus";
import ExplorerChair from "../components/ExplorerChair/ExplorerChair";
import Header from "../components/Header/Header";
import HighlyExperiences from "../components/HighlyExperiences/HighlyExperiences";
import SearchForm from "../components/SearchForm/SearchForm";

const HomePage = () => {
  const linkAdventures = "/adventures";
  const linkAcommodations = "/accommodations";
  const linkExperiences = "/experiences";
  // const linkFeatured = "/featured";
  return (
    <>
      <Header>
        <SearchForm />
      </Header>
      <ExplorerChair />
      <ChairPlus />
      <AdventuresChair link={linkAdventures} />
      <Acomodation link={linkAcommodations} />
      <HighlyExperiences link={linkExperiences} />
    </>
  );
};

export default HomePage;
