import "./SearchForm.css";
import "../../utils_css/utils.css";

const SearchForm = () => {
  return (
    <form className="form-header border">
      <p>Book unioque accommodations to code as never before</p>
      <div className="flex flex-columns">
        <label htmlFor="where">WHERE</label>
        <input type="text" id="where" placeholder="Everywear" />
      </div>
      <div className="flex">
        <div className="flex flex-columns width-50">
          <label htmlFor="arrival">ARRIVAL</label>
          <input type="date" id="arrival" />
        </div>
        <div className="flex flex-columns width-50">
          <label htmlFor="departure">DEPARTURE</label>
          <input type="date" id="departure" />
        </div>
      </div>
      <div className="flex flex-columns">
        <label htmlFor="developers">DEVELOPERS</label>
        <input type="text" placeholder="Developers" id="developers" />
      </div>
      <button className="button-form">Search</button>
    </form>
  );
};

export default SearchForm;
