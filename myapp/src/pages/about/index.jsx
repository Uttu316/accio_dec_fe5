import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Header title="About" />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About ShopEase</h1>
          <p>
            ShopEase was founded with a simple mission: to make online shopping
            effortless, enjoyable, and accessible to everyone. Since our
            inception, we've been committed to providing high-quality products
            and exceptional customer service.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="About ShopEase"
          className={styles.heroImage}
        />
      </section>

      <section className={styles.story}>
        <h2>Our Story</h2>
        <p>
          Founded in 2020, ShopEase started as a small online marketplace with
          just a handful of products. Our founders recognized the need for a
          trustworthy e-commerce platform that prioritizes customer satisfaction
          above all else.
        </p>
        <p>
          Today, we've grown into a global brand serving millions of customers
          worldwide. Our commitment to innovation, quality, and customer-centric
          approach has been the driving force behind our success.
        </p>
        <p>
          We believe that shopping should be more than just a transaction—it
          should be an experience. That's why we continuously invest in
          technology, partnerships, and our team to bring you the best possible
          shopping experience.
        </p>
      </section>

      <section className={styles.mission}>
        <h2>Our Mission & Values</h2>
        <div className={styles.missionGrid}>
          <div className={styles.missionItem}>
            <h3>Customer First</h3>
            <p>
              Everything we do revolves around our customers. Your satisfaction
              is our top priority, and we're always working to exceed your
              expectations.
            </p>
          </div>
          <div className={styles.missionItem}>
            <h3>Quality Assurance</h3>
            <p>
              We partner with trusted manufacturers and suppliers to ensure
              every product meets our high standards of quality and reliability.
            </p>
          </div>
          <div className={styles.missionItem}>
            <h3>Innovation</h3>
            <p>
              We embrace technology and innovation to continuously improve our
              platform and bring you new features and better shopping
              experiences.
            </p>
          </div>
          <div className={styles.missionItem}>
            <h3>Sustainability</h3>
            <p>
              We're committed to sustainable practices and work with
              eco-friendly suppliers to minimize our environmental impact.
            </p>
          </div>
          <div className={styles.missionItem}>
            <h3>Community</h3>
            <p>
              We believe in giving back to the communities we serve through
              charitable initiatives and support for local businesses.
            </p>
          </div>
          <div className={styles.missionItem}>
            <h3>Integrity</h3>
            <p>
              Honesty, transparency, and ethical business practices are at the
              core of everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="CEO"
            />
            <h3>John Smith</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="CTO"
            />
            <h3>Sarah Johnson</h3>
            <p>CTO</p>
          </div>
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Head of Customer Service"
            />
            <h3>Mike Davis</h3>
            <p>Head of Customer Service</p>
          </div>
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Marketing Director"
            />
            <h3>Emily Chen</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
