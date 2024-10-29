import React from 'react';
import AllCategories from '../components/Sections/AllCategories';
import SubscribeSection from '../components/Sections/SubscribeSection';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import AddBox from '../components/AddBox/AddBox';

const Categories = () => {
     const breadcrumbItems = [
       { label: "Home", path: "/", active: false },
       { label: "All Categories", path: "/all-categories", active: true },
     ];
    return (
      <div>
        <Breadcrumb items={breadcrumbItems} />
        <AllCategories />
        <SubscribeSection />
       
      </div>
    );
};

export default Categories;