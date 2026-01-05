import styles from "./index.module.css";
import PageWrapper from "../../components/pageWrapper";

const ContactPage = () => {
  return (
    <PageWrapper className={styles.container} title="Contact">
      <section className={styles.contactHero}>
        <h1>Get In Touch</h1>
        <p>
          Have questions about our products or need assistance? We're here to
          help. Reach out to us and we'll get back to you as soon as possible.
        </p>
      </section>

      <section className={styles.contactForm}>
        <div className={styles.formContainer}>
          <h2>Send us a Message</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <div className={styles.infoItem}>
            <h3>Address</h3>
            <p>
              123 E-commerce Street
              <br />
              Shopping City, SC 12345
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>support@shopease.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Business Hours</h3>
            <p>
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>

      <section className={styles.map}>
        <h2>Find Us</h2>
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Store location map"
          className={styles.mapImage}
        />
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
