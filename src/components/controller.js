import { signal } from "@preact/signals-react";
import Counter from "./counter/counter";
import Todos from "./todos/todos";

export const componentName=signal('counter')

export const Component=()=>{
    switch (componentName.value) {
        case 'counter': return <Counter />
        case 'todos': return  <Todos />
        default:
            break;
    }
}