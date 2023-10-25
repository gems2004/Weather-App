import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSearchData } from "./searchSlice";
import { useNavigate } from "react-router-dom";
const Results = () => {
  const navigate = useNavigate();
  const searchData = useSelector(getSearchData);
  useEffect(() => {
    if (searchData.searchQuery == "" && searchData.results == null) {
      navigate("/");
    }
  }, [searchData]);
  return <></>;
};

export default Results;
