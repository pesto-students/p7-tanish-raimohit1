var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.learn = function (subject) {
  console.log(this.name + " is now teaching " + subject);
};

var him = new Teacher();

him.initialize("mohit", 25);
him.learn("Inheritance");
