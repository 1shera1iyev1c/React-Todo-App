import { useState } from "react";
import { List, Item } from "./components";

function App() {

  const [allTodo, setAllTodo] = useState([])
  const count = allTodo.at(0)?.id ? allTodo.at(0)?.id + 1 : 1 

  const handleAddTodo = (evt) => {
    if (evt.target.value) {
      if (evt.keyCode === 13) {
        const newTodo = {
          id : count,
          text : evt.target.value,
          isComplate : false
        };

        setAllTodo([newTodo, ...allTodo])
        evt.target.value = null

      }
    } else {
      alert("Iltimos ma'lumot kiriting" )
    }
  }

  return (
    <div className="container pt-2">
        <div className="rounded bg-primary p-5 d-flex align-items-center justify-content-center">
          <input type="text" className="form-control w-75 mt-5 mb-5" placeholder="Add todo" onKeyUp={handleAddTodo} />
          <button className="btn btn-success">+ Add Item</button>
        </div>

          {allTodo.length > 0 &&
            <List>
              {
                allTodo.map(todo => <Item key={todo.id} todos={todo} />)  
              }
            </List>
          }
    </div>
    );
}

export default App;
