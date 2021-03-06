import { SET_TODO } from "@/store/actionTypes";
import { ITodo, TODO_STATUS } from "@/typings"
import { Store, useStore } from "vuex"

interface IUseTodo {
    setTodo: (value: string)=>void;
    setTodoList: ()=>void;
    removeTodo: ()=>void;
    setStatus: ()=>void;
    setDoing: ()=>void;
}
function useTodo(): IUseTodo {
    const store:Store<any> = useStore();
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: 111,
            content: value,
            status: TODO_STATUS.WILLD
        }
        store.dispatch(SET_TODO, todo)
    }
    function setTodoList() {
        
    }
    function removeTodo() {
        
    }
    function setStatus() {
        
    }
    function setDoing() {
        
    }
    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}
export {
    useTodo
}