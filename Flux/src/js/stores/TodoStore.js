import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 12456789,
                text: "Order Shoes",
                complete: false
            },
            {
                id: 12456780,
                text: "Eat",
                complete: true
            },
        ];
    }

    createTodo(text){
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false
        });
        this.emit("change");
    }

    getAll(){
        return this.todos;
    }
}

const todoStore = new TodoStore;
window.todoStore = todoStore;
export default todoStore;