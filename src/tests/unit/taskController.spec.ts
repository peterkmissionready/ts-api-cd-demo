import { getAllTasks } from '../../controllers/taskController'
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('getAllTasks', () => {
  test('should send all tasks via res', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = [
      {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
      },
    ]

    // Act
    getAllTasks(req, res)

    // Assert
    expect(res.send).toBeCalledTimes(1)
  })
})

 
describe('getOneTask', () => {
  test('when id 1 returns the default task', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = [
      {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
      },
    ]
    req.params = { id: '1' }

    // Act
    getOneTask(req, res)

    // Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)

  })
})
