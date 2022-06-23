import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Course {
    id: ID
    courseName: String
    category: String
    price: Int
    email: String
    language: String
    teachingAssits: [TeachingAssistInput]
  }

  type TeachingAssistInput {
    id: ID
    firstName: String
    lastName: String
    experience: String
  }

  enum Stack {
    WEB
    MOBILE
    OTHER
  }

  type Query {
    getCourse(id: ID): Course
  }

  input CourseInput {
    id: ID
    courseName: String!
    category: String
    price: Int!
    email: String!
    language: String
    teachingAssits: [TeachingAssistInput]!
  }

  input TeachingAssistInput {
    firstName: String
    lastName: String
    experience: String!
  }

  type Mutation {
    createCourse(input: CourseInput): Course
  }

`) 

export default schema;
