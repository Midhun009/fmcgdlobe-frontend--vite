import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutBusiness from "../components/Products/Details/AboutBusiness";
import Reviews from "../components/Products/Details/Reviews";
import ReviewForm from "../components/Products/Details/ReviewForm";
import Sidebar from "../components/Products/Details/Sidebar";
import ProductGallery from "../components/Products/Details/ProductGallery";
import SubscribeSection from "../components/Sections/SubscribeSection";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { fetchProductDetails } from "../Api/productApi";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const productData = await fetchProductDetails(id);
      setProduct(productData);
    };

    getProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const averageRating =
    product.reviews && product.reviews.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.length
      : 0;

  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Products", path: "/products", active: false },
    { label: "Product Detail", path: `/product/${id}`, active: true },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <section className="gray py-5 position-relative">
        <div className="container">
          <ProductGallery
            productImage={product.images[0]?.image}
            productName={product.name}
            rating={averageRating}
          />
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <AboutBusiness description={product.description} />
              <Reviews reviews={product.reviews} />{" "}
              {/* Pass product.reviews here */}
              <ReviewForm productId={product.id} />
            </div>
            <Sidebar product={product} />
          </div>
        </div>
        <SubscribeSection />
      </section>
    </div>
  );
};

export default ProductDetail;
