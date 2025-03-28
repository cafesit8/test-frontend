import { URL_COURSES } from '../constants/index'
import type { Course } from '../types'

export async function getCourses() {
  try {
    const response = await fetch(URL_COURSES)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json()
  } catch (error) {
    throw new Error('Network response was not ok')
  }
}

export async function addCourse(course: Course) {
  try {
    const response = await fetch(URL_COURSES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    })
  
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json()
  } catch (error) {
    throw new Error('Network response was not ok')
  }
}

export async function deleteCourse(id: number) {
  try {
    const response = await fetch(`${URL_COURSES}/${id}`, {
      method: 'DELETE'
    })
  
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json()
  } catch (error) {
    throw new Error('Network response was not ok')
  }
}

export async function updateCourse(course: Course) {
  try {
    const response = await fetch(`${URL_COURSES}/${course.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    })
  
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json()  
  } catch (error) {
    throw new Error('Network response was not ok')  
  }
}