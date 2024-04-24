import Cities from "./Cities.json";
function SearchFiltter(setShowSuggestion, item) {
  const filterdata = Cities?.filter((ele) =>
    ele?.toLowerCase().includes(item?.toLowerCase())
  );

  setShowSuggestion(filterdata);
}

export default SearchFiltter;
