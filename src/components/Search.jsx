
import SearchIcon from '@mui/icons-material/Search';
import Select from 'react-select';
const MediaTypeOptions = [
  {
    value: 'media type',
    label: 'media type',
  },
  {
    value: 'movies',
    label: 'movies',
  },
  {
    value: 'tv',
    label: 'tv shows',
  },
];
const Search = () => {
  return (
    <div className="search-section">
      <div className="container search-container py-5 bg-red d-flex justify-content-between align-items-center">
        <div className="searching">
          <SearchIcon />
          <input
            type="search"
            name=""
            id=""
            className="inputSearch outline-0 border-0 ms-2"
            placeholder="Find movies Tv shows documentary and more ..."
          />
        </div>
        <Select
          className="selectMedia"
          defaultValue={MediaTypeOptions[0]}
          options={MediaTypeOptions}
        />
      </div>
    </div>
  );
};
export default Search;

