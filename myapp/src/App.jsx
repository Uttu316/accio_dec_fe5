import Counter from "./components/Counter";
import Footer from "./components/footer";
import Header from "./components/header";
import TodoList from "./components/todolist";
import UserList from "./components/userList";
const App = () => {
  return (
    <>
      <Header title="MyApp" />
      <h1>Lets Learn react</h1>
      <p>React is a javascript library for building user interfaces.</p>
      <UserList />
      <Counter />
      <TodoList />
      <Footer />
    </>
  );
};
export default App;
