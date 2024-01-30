import axios from 'axios';
import TodoList from './TodoList';

jest.mock('axios');

describe('TodoList', () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  // Test for getTodos method
  describe('getTodos', () => {
    it('fetches todos from the API endpoint', async () => {
      const todoList = new TodoList();

      // Mock response data from the API
      const todos = [
        {
          id: 1,
          userId: 1,
          title: 'Sample todo item 1',
          completed: false,
        },
        {
          id: 2,
          userId: 1,
          title: 'Sample todo item 2',
          completed: false,
        },
      ];

      mockedAxios.get.mockResolvedValueOnce({ data: todos });

      // Call the method
      const result = await todoList.getTodos();

      // expectations
      expect(result).toEqual(todos);
      expect(mockedAxios.get).toHaveBeenCalledWith(BASE_URL);
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
  });
})