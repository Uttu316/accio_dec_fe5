import { useCallback, useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsFilter from "../../components/productsFilter";
import ProductsList from "../../components/productsList";
import { api } from "../../services";
import styles from "./index.module.css";
import ProductListWrapper from "../../components/productsList/ProdutListWrapper";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  const loadProducts = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    loadProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  console.log("Products Page Rendered");

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
      {isSuccess && <ProductListWrapper products={products} />}
      <Footer />
    </div>
  );
};
export default ProductsPage;
