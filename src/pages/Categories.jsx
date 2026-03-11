import React from "react";

const Categories = () => {
  return (
    <div className="p-6">

      <h2 className="mb-6 text-2xl font-bold">Categories</h2>

      <ul className="space-y-3">

        <li className="flex justify-between p-3 border rounded">
          Men
          <button className="text-red-500">Delete</button>
        </li>

        <li className="flex justify-between p-3 border rounded">
          Women
          <button className="text-red-500">Delete</button>
        </li>

        <li className="flex justify-between p-3 border rounded">
          Kids
          <button className="text-red-500">Delete</button>
        </li>

      </ul>

    </div>
  );
};

export default Categories;