import { getAllTasks } from '../../controllers/taskController'
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('getAllTasks', () => {
  test('should send all tasks via res', () => {
    // Arrange
    const reqMock = getMockReq()
    const { res } = getMockRes()

    // Act
    getAllTasks(reqMock, res)

    // Assert
    expect(res.send).toBeCalledTimes(1)
  })
})

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
