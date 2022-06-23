import { nanoid } from "nanoid";

class Course{
  constructor(id,{
    courseName, category, price, language, email, stack, teachingAssits
  }){
    this.id = id
    this.courseName = courseName
    this.category = category
    this.price = price
    this.language = language
    this.email = email
    this.stack = stack
    this.teachingAssits = teachingAssits
  }
}

const courseholder = {}

let resolvers = {
  getCourse: ({id}) => {
    return new Course(id, courseholder[id])
  },
  createCourse: ({input}) => {
    let id = nanoid()
    courseholder[id] = input

    return new Course(id, input)
  }
} 

export default resolvers;
