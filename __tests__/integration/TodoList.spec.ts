import TodoList from "../../TodoList";

describe('TodoList', () => {
    let todoList = new TodoList();

    beforeEach(() => {
        todoList = new TodoList();
    })

    describe('getTodos()', () => {
        it('should return todos', async () => {
            const todos = await todoList.getTodos();
            // expect(todos).toBeDefined();
            expect(todos.length).toBeGreaterThan(0);
        })
    })

    describe('getTodoById()', () => {
        it('should return the proper todo when the id exists', async () => {
            const todo = await todoList.getTodoById(1);
            // expect(todo).toBeDefined();
            expect(todo.id).toBe(1);
        })

        // TODO: Call person who wrote the class...
        // it('should not return a todo when the id does not exist', async () => {
        //     const todoList = new TodoList();
        //     const todo = await todoList.getTodoById(0);
        //     expect(todo.status).toBe(404);
        // })
    })

    describe('getTodoComments()', () => {
      it('should return comments for a given todo', async () => {
          const comments = await todoList.getTodoComments(1);

          // Be careful, if they delete all comments, this will fail
          expect(comments.length).toBeGreaterThan(0);
          expect(comments[0].id).toBe(1);
      })
    })

    describe('createTodo()', () => {
        it('should create a todo', async () => {
            const todo = await todoList.createTodo({
                userId: 1,
                title: 'title',
                completed: false,
            });
            expect(todo.id).toBeGreaterThan(0);
            expect(todo.userId).toBe(1);
            expect(todo.title).toBe('title');
            expect(todo.completed).toBe(false);
        })
    })

    describe('updateTodo()', () => {
        it('should update a todo', async () => {
            const todo = await todoList.updateTodo(1, {
                title: 'new title',
                completed: true,
                userId: 2
            });
            expect(todo.title).toBe('new title');
            expect(todo.completed).toBe(true);
            expect(todo.userId).toBe(2);
        })
    })

    describe('deleteTodo()', () => {
        it('should delete a todo', async () => {
            const hasBeenDeleted = await todoList.deleteTodo(1);
            expect(hasBeenDeleted).toBeTruthy();
        })
    })
})