import Header from "./components/Header/index";
import Content from './components/Content';
import Footer from "./components/Footer";
import { TodoProvider } from "./Context/ToDoContext";



function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header/>
        <Content/>      
      </section>
      <Footer/>
    </TodoProvider>
  );
}

export default App;
