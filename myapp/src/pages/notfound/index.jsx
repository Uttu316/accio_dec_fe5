import { Link } from "react-router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Header title="404" />

      <section className={styles.notFound}>
        <div className={styles.content}>
          <img
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Page not found illustration"
            className={styles.image}
          />
          <h1>404 - Page Not Found</h1>
          <p>
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
          <div className={styles.buttons}>
            <Link to="/" replace={true} className={styles.homeButton}>
              Go to Home
            </Link>
            <Link
              to="/products"
              replace={true}
              className={styles.productsButton}
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
