import { useState } from "react";
import React from "react";

import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex lg:ml-6">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search"
        className="p-2 text-gray-400 hover:text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
      />
      <button
        onClick={handleSearch}
        className="p-2 ml-2 text-gray-400 hover:text-gray-500 focus:outline-none"
      >
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default SearchComponent;
