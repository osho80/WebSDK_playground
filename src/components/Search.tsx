import React, { useState } from "react";

// const Search = ({setFilter}: any) => {
const Search = (props: any) => {
  const [query, setQuery] = useState<string>("");
  console.log("Props:", props);
  const { setFilter } = props;
  // console.log("setFilter:", setFilter);
  const handleChange = (e: any) => {
    e.preventDefault();
    setQuery(e.target.value);
    setFilter(e.target.value);
  };
  console.log("My query:", query);

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
