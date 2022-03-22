import React, { useState } from "react";

const Search = (props: any) => {
  const [query, setQuery] = useState<string>("");
  const { setFilter } = props;
  const handleChange = (e: any) => {
    e.preventDefault();
    setQuery(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Customer"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
