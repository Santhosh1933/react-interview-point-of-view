import React, { useState } from "react";

export const ConditionalDropdownList = () => {
  const [products, setProducts] = useState([]);

  const categories = [
    "Electronics",
    "Fashion",
    "Home and Garden",
    "Toys and Games",
    "Books and Stationery",
    "Sports and Outdoors",
  ];

  const categoryProducts = {
    Electronics: [
      "Smartphone",
      "Laptop",
      "Headphones",
      "Smartwatch",
      "Camera",
      "Tablet",
    ],
    Fashion: ["T-shirt", "Jeans", "Dress", "Shoes", "Sunglasses", "Handbag"],
    "Home and Garden": [
      "Bedding Set",
      "Couch",
      "Dining Table",
      "Indoor Plants",
      "Cookware Set",
      "Wall Art",
    ],
    "Toys and Games": [
      "Board Game",
      "Action Figures",
      "Puzzle",
      "Remote Control Car",
      "Educational Toys",
      "Building Blocks",
    ],
    "Books and Stationery": [
      "Novel",
      "Notebook",
      "Pen Set",
      "Desk Organizer",
      "Bookmark",
      "Calendar",
    ],
    "Sports and Outdoors": [
      "Running Shoes",
      "Yoga Mat",
      "Bicycle",
      "Outdoor Tent",
      "Fitness Tracker",
      "Hiking Backpack",
    ],
  };

  function ChooseOption(option) {
    const selectedProducts = categoryProducts[option] || [];
    setProducts(selectedProducts);
    console.log(option);
  }

  return (
    <div className="w-full text-center text-2xl mt-[5%] ">
      <h1>ConditionalDropdownList</h1>
      <div className="w-full ">
        <div className="flex gap-8 mx-auto mt-[3%] w-fit">
          <select
            name="category"
            id=""
            className="border-2 rounded-lg p-2 "
            onChange={() => ChooseOption(event.target.value)}
          >
            <option value="" disabled selected>
              Select a Category
            </option>
            {categories.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="products" id="">
            <option value="" disabled selected>
              No Products
            </option>
            {products.map((product, i) => (
              <option key={i} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
