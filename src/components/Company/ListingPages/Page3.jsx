import React from "react";
import Select from "react-select";

const Page3 = ({ form = {}, handleChange }) => {
  // Define options for each select
  const categories = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
  ];

  const keywords = [
    { value: "keyword1", label: "Keyword 1" },
    { value: "keyword2", label: "Keyword 2" },
  ];

  const brands = [
    { value: "brand1", label: "Brand 1" },
    { value: "brand2", label: "Brand 2" },
  ];

  return (
    <div className="row">
      {/* Category Field */}
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label>Category</label>
        <Select
          name="category"
          value={(form.category || []).map((val) =>
            categories.find((option) => option.value === val)
          )}
          onChange={(options) =>
            handleChange({
              target: {
                name: "category",
                value: options ? options.map((option) => option.value) : [],
              },
            })
          }
          options={categories}
          placeholder="Select Categories"
          isMulti
          isSearchable
          styles={{
            control: (provided) => ({
              ...provided,
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
              width: "100%",
              transition: "border-color 0.3s",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 100,
            }),
          }}
        />
      </div>

      {/* Keywords Field */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Keywords</label>
        <Select
          name="keywords"
          value={(form.keywords || []).map((val) =>
            keywords.find((option) => option.value === val)
          )}
          onChange={(options) =>
            handleChange({
              target: {
                name: "keywords",
                value: options ? options.map((option) => option.value) : [],
              },
            })
          }
          options={keywords}
          placeholder="Select Keywords"
          isMulti
          isSearchable
          styles={{
            control: (provided) => ({
              ...provided,
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
              width: "100%",
              transition: "border-color 0.3s",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 100,
            }),
          }}
        />
      </div>

      {/* Brand Field */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Brand</label>
        <Select
          name="brand"
          value={(form.brand || []).map((val) =>
            brands.find((option) => option.value === val)
          )}
          onChange={(options) =>
            handleChange({
              target: {
                name: "brand",
                value: options ? options.map((option) => option.value) : [],
              },
            })
          }
          options={brands}
          placeholder="Select Brands"
          isMulti
          isSearchable
          styles={{
            control: (provided) => ({
              ...provided,
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
              width: "100%",
              transition: "border-color 0.3s",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 100,
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Page3;
