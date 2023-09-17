import ChairPlus from "../components/ChairPlus/ChairPlus";
import ExplorerChair from "../components/ExplorerChair/ExplorerChair";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";

const HomePage = () => {
  return (
    <>
      <Header>
        <SearchForm />
      </Header>
      <ExplorerChair />
      <ChairPlus />
    </>
  );
};

export default HomePage;
