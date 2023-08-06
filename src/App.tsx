import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Likes from "./components/Likes";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./ExpenseTracker/Components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/Components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/Components/ExpenseForm";
import categories from "./ExpenseTracker/Categories";




function App() {
  const [alertVisibility, setAlertVisibility]= useState(false);
  let items = ["Imo", "Enugu", "Abia", "Ebonyi", "Anambara"];

  const [cartItems, setCartItems]= useState(['Milo', 'Dano', 'Sugar','Detol', 'salt']);
  

  const [selectedCategory, setSelectedCategory] =useState("")

  const [ expenses, setExpenses ] = useState([
    {id: 1, description: "aaa", amount: 50, category: "Utilities"},
    {id: 2, description: "bbb", amount: 650, category: "Utilities"},
    {id: 3, description: "ccc", amount: 50, category: "Entertainment"},
    {id: 4, description: "ddd", amount: 50, category: "Utilities"},
    {id: 5, description: "eee", amount: 500, category: "Entertainment"}
      
  ])
  const visibleExpenses = selectedCategory? expenses.filter(e => e.category === selectedCategory): expenses;

  

  return (
    <div>
      <ListGroup items={items} headings="SouthEast" onSelectItem={(item)=> console.log(item)}></ListGroup>
      {alertVisibility && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>} 
      <Button onClick={()=> alertVisibility? setAlertVisibility(false): setAlertVisibility(true)}>My Button</Button>
      <Likes></Likes>
      <NavBar cartItemCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={()=> setCartItems([])}></Cart>
      <ExpandableText >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aperiam molestiae, nobis similique amet animi corrupti facilis nisi aspernatur quibusdam reiciendis repudiandae laborum? Unde similique quae, nam provident non temporibus praesentium quidem vitae, atque perspiciatis natus repellendus laborum, aliquam obcaecati! Quisquam nobis aspernatur animi, dolorem, ad ratione nostrum sed praesentium saepe quidem necessitatibus. Adipisci accusamus, cupiditate temporibus eum facilis commodi iste sapiente fuga tenetur obcaecati asperiores expedita dolorem ad at inventore culpa nemo placeat doloribus sit quidem blanditiis esse? Eius nulla possimus esse blanditiis hic earum facere ea iusto doloremque debitis ut nostrum voluptatum, magni nemo, sequi error exercitationem unde!</ExpandableText>
      <Form></Form>
      <div className="mb-5">
      <ExpenseForm onSubmit={expense=> setExpenses([...expenses, {...expense, id: expenses.length + 1}])} ></ExpenseForm>
      </div>
      <div className="mb-3">
      <ExpenseFilter onSelectCategory={(category)=> setSelectedCategory(category)}></ExpenseFilter>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpenses(expenses.filter(e => e.id !== id))}></ExpenseList>
      
      

    </div>
  );
}

export default App;
