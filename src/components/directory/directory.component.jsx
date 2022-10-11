import React from "react";

import DirectoryItem from "../directory-item/directory-item.component";

import { categories } from "../../seed-categories";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
