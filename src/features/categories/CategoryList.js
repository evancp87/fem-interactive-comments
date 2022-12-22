import React, { useEffect } from "react";
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { getAllCats } from "./categoriesSlice";
import { Link } from "react-router-dom";
// import {Link} from "react-router-dom";
// const categories = useSelector((state) => state.categories);

import Category from "./Category";
// import {getCategories} from "../screens/categories";

function CategoryList() {
  // const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  // const categories = useSelector((state) => state.categories.categories);

  console.log(categories);

  return (
    <div>
      <ul className="flex justify-center mt-3 space-x-4 ">
        {categories &&
          categories.map((category, i) => (
            <li key={i} className="flex flex-row">
              <Link to={`/categories/${category.name}`}>
                <Category name={category.name} />
              </Link>
              {/* {category.name} */}
            </li>
          ))}
      </ul>
    </div>

    // flex-row
    // <div>{/* Object.keys(defaultData).map(category => <Category/>) */}</div>
  );
}

export default CategoryList;
