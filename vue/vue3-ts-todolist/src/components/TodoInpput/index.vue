<template>
  <div>
      <input type="text" @keyup="setTodoValue" v-model="todoValue">
      <h1>{{ $store.state.list }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTodo} from '../../hooks';
export default defineComponent({
    name: 'TodoInput',
    setup() {
        const { setTodo } = useTodo()
        const todoValue = ref<string>('')
        const setTodoValue = (e: KeyboardEvent)=>{
            // 回车keyCode是13
            if(e.key === 'Enter' && todoValue.value.trim().length){
                todoValue.value = ''
                setTodo(todoValue.value)
            }
        }
        return {
            todoValue,
            setTodoValue
        }
    }

})

</script>
