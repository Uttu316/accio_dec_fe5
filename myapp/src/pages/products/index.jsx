import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsFilter from "../../components/productsFilter";
import ProductsList from "../../components/productsList";
import { api } from "../../services";
import styles from "./index.module.css";

const ProductsPage = () => {
  const [selectedFilter, setFilter] = useState("all");
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  const loadProducts = async () => {
    try {
      const res = await api({
        endpoint: "/products",
      });
      setStatus("success");
      setProducts(res);
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  return (
    <div className={styles.container}>
      <Header title="Products" />

      <h1 className={styles.title}> Latest Products</h1>
      {isLoading && (
        <p className={styles.loading}>Loading products for you...</p>
      )}
      {isError && (
        <p className={styles.error}>
          Something went wrong. Please try again later
        </p>
      )}
      {isSuccess && (
        <>
          <ProductsFilter
            setFilter={setFilter}
            selectedFilter={selectedFilter}
          />
          <ProductsList selectedFilter={selectedFilter} products={products} />
        </>
      )}
      <Footer />
    </div>
  );
};
export default ProductsPage;
