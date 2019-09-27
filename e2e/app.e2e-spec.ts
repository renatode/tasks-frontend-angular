import { TasksPage } from './app.po';

describe('tasks App', () => {
  let page: TasksPage;

  beforeEach(() => {
    page = new TasksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
