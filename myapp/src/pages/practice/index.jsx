import Counter from "../../components/Counter";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageWrapper from "../../components/pageWrapper";
import SaleController from "../../components/SaleBanner/saleController";
import TodoList from "../../components/todolist";
import UserList from "../../components/userlist";
const PracticePage = () => {
  return (
    <PageWrapper title="Practice">
      <h1>Lets Learn react</h1>
      <p>React is a javascript library for building user interfaces.</p>
      <UserList />
      <Counter />
      <TodoList />
      <SaleController />
    </PageWrapper>
  );
};
export default PracticePage;
