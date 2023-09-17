import "./SearchForm.css";
import "../../utils_css/utils.css";
import { useState } from "react";
import getSearchForm from "../../services/search_form_services";
import PropTypes from "prop-types";

const SearchForm = ({ dataForm, getwhere }) => {
  // state where
  const [where, setWhere] = useState("");
  //state arrival
  const [arrival, setArrival] = useState("");
  //state departure
  const [departure, setDeparture] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();

    const data = await getSearchForm(where, arrival, departure);
    //manda a App.jsx los datos del formulario

    dataForm(data);
    getwhere(where);
  };
  return (
    <form className="form-header border" onSubmit={submitForm}>
      <p>Book unioque accommodations to code as never before</p>
      <div className="flex flex-columns">
        <label htmlFor="where">WHERE</label>
        <input
          type="text"
          id="where"
          placeholder="Everywear"
          onChange={(e) => setWhere(e.target.value)}
        />
      </div>
      <div className="flex">
        <div className="flex flex-columns width-50">
          <label htmlFor="arrival">ARRIVAL</label>
          <input
            type="date"
            id="arrival"
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>
        <div className="flex flex-columns width-50">
          <label htmlFor="departure">DEPARTURE</label>
          <input
            type="date"
            id="departure"
            onChange={(e) => setDeparture(e.target.value)}
          />
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

SearchForm.propTypes = {
  dataForm: PropTypes.func,
  getwhere: PropTypes.func,
};

export default SearchForm;
