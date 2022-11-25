import React, { useEffect } from "react";
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { getAllCats } from "./categoriesSlice";
// import {Link} from "react-router-dom";
// const categories = useSelector((state) => state.categories);

import Category from "./Category";
// import {getCategories} from "../screens/categories";
// import {AiFillHome} from "react-icons/ai";
// import {SiUdacity} from "react-icons/si";
// import {DiReact} from "react-icons/di";
// import {SiRedux} from "react-icons/si";

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  useEffect(() => dispatch(getAllCats()), [dispatch]);

  return (
    <div>
      <ul className="flex justify-center mt-3 space-x-4 ">
        {categories &&
          Object.keys(categories).map((category, i) => (
            <li key={i} className="flex flex-row">
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
