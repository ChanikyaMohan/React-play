import { EventEmitter } from "events";
import dispatcher from "../dispatcher"

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

    handleActions(action){
        switch (action.type){
            case "CREATE_TODO" : {
                this.createTodo(action.text);
            }
        }
    }
}

const todoStore = new TodoStore;
window.todoStore = todoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;