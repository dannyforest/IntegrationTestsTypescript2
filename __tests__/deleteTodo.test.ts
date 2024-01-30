// import axios from 'axios';
// import TodoList from './TodoList';
//
// jest.mock('axios');
//
// const mockAxios = axios as jest.Mocked<typeof axios>;
// let todoList: TodoList;
//
// beforeEach(() => {
//     todoList = new TodoList();
// });
//
// describe('TodoList class', () => {
//     describe('deleteTodo method', () => {
//         it('should delete a todo item by id and return true when delete is successful', async () => {
//             const todoId = 1;
//             mockAxios.delete.mockResolvedValue({ status: 200 });
//
//             const result = await todoList.deleteTodo(todoId);
//
//             expect(mockAxios.delete).toBeCalledWith(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
//             expect(result).toBe(true);
//         });
//
//         it('should return false when deletion is unsuccessful', async () => {
//             const todoId = 1;
//             mockAxios.delete.mockResolvedValue({ status: 404 });
//
//             const result = await todoList.deleteTodo(todoId);
//
//             expect(mockAxios.delete).toBeCalledWith(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
//             expect(result).toBe(false);
//         });
//     });
// });