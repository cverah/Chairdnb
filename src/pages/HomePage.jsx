import AdventuresChair from "../components/AdventuresChair/AdventuresChair";
import ChairPlus from "../components/ChairPlus/ChairPlus";
import ExplorerChair from "../components/ExplorerChair/ExplorerChair";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";

const HomePage = () => {
  const linkAdventures = "/adventures";
  // const linkAcommodations = "/accommodations";
  // const linkExperiences = "/experiences";
  // const linkFeatured = "/featured";
  return (
    <>
      <Header>
        <SearchForm />
      </Header>
      <ExplorerChair />
      <ChairPlus />
      <AdventuresChair link={linkAdventures} />
    </>
  );
};

export default HomePage;
