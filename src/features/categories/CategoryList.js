import React, { useEffect } from "react";
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../actions/categoriesActions";

// import {Link} from "react-router-dom";
// const categories = useSelector((state) => state.categories);

import Category from "../../components/Category";
// import {getCategories} from "../screens/categories";
// import {AiFillHome} from "react-icons/ai";
// import {SiUdacity} from "react-icons/si";
// import {DiReact} from "react-icons/di";
// import {SiRedux} from "react-icons/si";

function CategoryList() {
  console.log(useSelector((store) => console.log(store)));
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.categories);

  useEffect(() => dispatch(getCategories(categories)), [dispatch]);
  console.log(categories);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <ul className="flex justify-center mt-3 space-x-4 ">
        {Object.values(categories).map((category) => (
          <li className="flex flex-row" key={category.name}>
            {/* <Category category={category} /> */}
            {category.name}
          </li>
        ))}
      </ul>
    </div>

    // flex-row
    // <div>{/* Object.keys(defaultData).map(category => <Category/>) */}</div>
  );
}

export default CategoryList;
