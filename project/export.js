module.exports = function (person) {
   function getName(person){
     return person.name;
    }  

  return getName();
}

const person = {
    name: "Sasha",       // строка
    age: 25,             // число
    isStudent: true      // булево значение
};
