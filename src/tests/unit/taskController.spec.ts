import { getAllTasks, getOneTask } from '../../controllers/taskController'
import { createRequest, createResponse } from 'node-mocks-http'

describe('getAllTasks', () => {
  test('should send all tasks via res', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected= [
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
    expect(res.json()._getData()).toEqual(expected)
  })
})

describe('getOneTask', () => {
  test('when id 1 returns the default task', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected= [
      {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
      },
    ]

    req.params = { id: '1'}

    // Act
    getOneTask(req, res)

    // Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })
})

/* 
describe('getOneTask', () => {
  test('should send 404 if not exists', () => {
    // Arrange
    const reqMock = getMockReq({ param: { id: '22' } as any})
    const { res } = getMockRes()
    res.status(404)

    // Act
    getAllTasks(reqMock, res)

    // Assert
    expect(res.status).toHaveBeenCalledWith(404)
  })
})
 */