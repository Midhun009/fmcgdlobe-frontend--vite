import React from "react";
import Select from "react-select"; // Import the Select component

const Page3 = ({ form, handleChange }) => {
  // Define options for each select
  const categories = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    // Add more categories as needed
  ];

  const keywords = [
    { value: "keyword1", label: "Keyword 1" },
    { value: "keyword2", label: "Keyword 2" },
    // Add more keywords as needed
  ];

  const brands = [
    { value: "brand1", label: "Brand 1" },
    { value: "brand2", label: "Brand 2" },
    // Add more brands as needed
  ];

  return (
    <div className="row">
      {/* Category Field */}
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label>Category</label>
        <Select
          name="category"
          value={
            categories.find((option) => option.value === form.category) || null
          }
          onChange={(option) =>
            handleChange({ target: { name: "category", value: option.value } })
          }
          options={categories}
          placeholder="Select Category"
          isSearchable // Enables the search functionality
          styles={{
            control: (provided) => ({
              ...provided,
              padding: "5px", // Your specified padding
              border: "1px solid #ccc", // Your specified border
              borderRadius: "4px", // Your specified border radius
              fontSize: "14px", // Your specified font size
              width: "100%", // Full width
              transition: "border-color 0.3s",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 100, // Ensure dropdown appears above other elements
            }),
            option: (provided) => ({
              ...provided,
              padding: "5px", // Adjust option padding if necessary
              cursor: "pointer", // Change cursor on hover
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#000", // Change text color if needed
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#aaa", // Placeholder color
            }),
          }}
        />
      </div>

      {/* Keywords Field */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Keywords</label>
        <Select
          name="keywords"
          value={
            keywords.find((option) => option.value === form.keywords) || null
          }
          onChange={(option) =>
            handleChange({ target: { name: "keywords", value: option.value } })
          }
          options={keywords}
          placeholder="Select Keyword"
          isSearchable // Enables the search functionality
          styles={{
            control: (provided) => ({
              ...provided,
              padding: "5px", // Your specified padding
              border: "1px solid #ccc", // Your specified border
              borderRadius: "4px", // Your specified border radius
              fontSize: "14px", // Your specified font size
              width: "100%", // Full width
              transition: "border-color 0.3s",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 100, // Ensure dropdown appears above other elements
            }),
            option: (provided) => ({
              ...provided,
              padding: "5px", // Adjust option padding if necessary
              cursor: "pointer", // Change cursor on hover
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#000", // Change text color if needed
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#aaa", // Placeholder color
            }),
          }}
        />
      </div>

      {/* Brand Field */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Brand</label>
        <Select
          name="brand"
          value={brands.find((option) => option.value === form.brand) || null}
          onChange={(option) =>
            handleChange({ target: { name: "brand", value: option.value } })
          }
          options={brands}
          placeholder="Select Brand"
          isSearchable // Enables the search functionality
          styles={{
            control: (provided) => ({
              ...provided,
              padding: "5px", // Your specified padding
              border: "1px solid #ccc", // Your specified border
              borderRadius: "4px", // Your specified border radius
              fontSize: "14px", // Your specified font size
              width: "100%", // Full width
              transition: "border-color 0.3s",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 100, // Ensure dropdown appears above other elements
            }),
            option: (provided) => ({
              ...provided,
              padding: "5px", // Adjust option padding if necessary
              cursor: "pointer", // Change cursor on hover
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#000", // Change text color if needed
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#aaa", // Placeholder color
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Page3;
