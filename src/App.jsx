import TodoList from "./components/TodoList"
export default function App() {
  return(
    <div style={{display:"grid", justifySelf:"center", width:"100%"}}>
      <h1 style={{textAlign:"center", color:"blue"}}>Todo App</h1>
      <TodoList/>
    </div>
  )
}