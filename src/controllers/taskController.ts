import { Request, Response } from 'express'
import * as taskService from '../services/taskService'

export const getAllTasks = (req: Request, res: Response) => {
  const tasks = taskService.getAllTasks()
  res.send(tasks)
}

export const createOneTask = (req: Request, res: Response) => {
  const name = req.body.name
  const description = req.body.description

  const newTask = taskService.createOneTask(name, description)

  res.status(201).send(newTask)
}

export const getOneTask = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id)

  try {
    const matchedTask = taskService.getOneTask(taskId)
    res.send(matchedTask)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const deleteTask = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id)

  try {
    const hasDeleted = taskService.deleteTask(taskId)
    if (hasDeleted) {
      res.status(204).send(`Task ${taskId} deleted successfully!`)
    } else {
      res.status(500).send(`Task ${taskId} deletion failed!`)
    }
  } catch (e) {
    res.status(404).send(e)
  }
}

export const updateTask = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id)

  const name = req.body.name
  const description = req.body.description

  try {
    const updatedTask = taskService.updateTask({
      id: taskId,
      name,
      description,
    })
    res.send(updatedTask)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const updateTaskPartial = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id)

  const name = req.body.name
  const description = req.body.description

  try {
    const updatedTask = taskService.updateTaskPartial({
      id: taskId,
      name,
      description,
    })
    res.send(updatedTask)
  } catch (e) {
    res.status(404).send(e)
  }
}
