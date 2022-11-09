import { getAddTodoButton, getTodos } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getTodos().should((t) => expect(t.length).equals(2));
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equals(3));
  });
});
