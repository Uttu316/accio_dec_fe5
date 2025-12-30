import styles from "./index.module.css";

const ProductsFilter = ({ setFilter, selectedFilter }) => {
  return (
    <div className={styles.filterContainer}>
      <span className={styles.label}>Filter By:</span>
      <FilterItem
        label={"All"}
        value={"all"}
        selectedFilter={selectedFilter}
        onFilter={setFilter}
      />
      <FilterItem
        label={"Men's Clothing"}
        value={"men's clothing"}
        selectedFilter={selectedFilter}
        onFilter={setFilter}
      />
      <FilterItem
        label={"Women's Clothing"}
        value={"women's clothing"}
        selectedFilter={selectedFilter}
        onFilter={setFilter}
      />
      <FilterItem
        label={"Electronics"}
        value={"electronics"}
        selectedFilter={selectedFilter}
        onFilter={setFilter}
      />
      <FilterItem
        label={"Jewelery"}
        value={"jewelery"}
        selectedFilter={selectedFilter}
        onFilter={setFilter}
      />
    </div>
  );
};

const FilterItem = ({ label, selectedFilter, value, onFilter }) => {
  const isActive = selectedFilter === value;
  return (
    <button
      className={`${styles.filterBtn} ${isActive ? styles.activeFilter : ""}`}
      onClick={() => onFilter(value)}
    >
      {label}
    </button>
  );
};
export default ProductsFilter;
