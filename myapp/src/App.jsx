import Counter from "./components/Counter";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/userList";
const App = () => {
  return (
    <>
      <Header title="MyApp" />
      <h1>Lets Learn react</h1>
      <p>React is a javascript library for building user interfaces.</p>
      <UserList />
      <Counter />
      <Footer />
    </>
  );
};
export default App;
