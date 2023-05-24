import {
  createOneTask,
  getAllTasks,
  getOneTask,
} from '../../services/taskService'

describe('getAllTasks', () => {
  test('should return a default Task', () => {
    // Arrange
    const expected = [
      {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
      },
    ]

    // Act
    const actual = getAllTasks()

    //Assert
    expect(actual).toEqual(expected)
  })
})

describe('createTask', () => {
  test('should create a task', () => {
    //Arrange
    const input = {
      name: 'Mission 02',
      description: 'NLP',
    }
    const expected = {
      id: 2,
      name: 'Mission 02',
      description: 'NLP',
      isCompleted: false,
    }

    //Act
    const actual = createOneTask(input.name, input.description)

    //Assert
    expect(actual).toEqual(expected)
  })
})

describe('getOneTask', () => {
  test('should return a task by Id', () => {
    //Arrange
    const input = 2
    const expected = {
      id: 2,
      name: 'Mission 02',
      description: 'NLP',
      isCompleted: false,
    }

    //Act
    const actual = getOneTask(input)

    //Assert
    expect(actual).toEqual(expected)
  })
})
