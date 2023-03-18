import { useSearchParams } from "react-router-dom";

import { Banner } from "../components/Banner";

export const Search = () => {
  // use the useSearchParams hook to access the SearchParams object
  const [search] = useSearchParams();

  return (
    <Banner
      title="Search"
      // use the get method to get the value of the specific search key
      info={search.get("city")}
    />
  );
};
