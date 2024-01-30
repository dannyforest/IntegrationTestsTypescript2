import axios from 'axios';

/**
 * Class representing a todo list.
 */
class TodoList {
    BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

    async getTodos() {
        const response = await axios.get(this.BASE_URL);
        return response.data;
    }

    async getTodoById(id: number) {
        const response = await axios.get(`${this.BASE_URL}/${id}`);
        return response.data;
    }

    async getTodoComments(id: number) {
        const response = await axios.get(`${this.BASE_URL}/${id}/comments`);
        return response.data;
    }

    async createTodo(todo: {
        userId: number,
        title: string,
        completed: boolean
    }) {
        const response = await axios.post(this.BASE_URL, todo);
        return response.data;
    }

    async updateTodo(id: number, updates: {
        userId?: number,
        title?: string,
        completed?: boolean
    }) {
        const response = await axios.put(`${this.BASE_URL}/${id}`, updates);
        return response.data;
    }

    async deleteTodo(id: number) {
        const response = await axios.delete(`${this.BASE_URL}/${id}`);
        return response.status === 200;
    }
}

export default TodoList;