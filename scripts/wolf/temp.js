Objects
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student;
///////////////////////////////////////////////
  Object.setPrototypeOf(Student.prototype, Person.prototype)


///////////////////////////////////////////////
https://stackoverflow.com/questions/32444575/whats-the-performance-impact-of-setprototypeof-on-a-new-object