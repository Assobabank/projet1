function getBudgets(persons) {
    let totalBudget = 0;
    for (let i = 0; i < persons.length; i++) {
      totalBudget += persons[i].budget;
    }
    return totalBudget;
  }
  
  // Exemples d'utilisation :
  const persons1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
  ];
  
  console.log(getBudgets(persons1)); // Résultat : 65700
  
  const persons2 = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
  ];
  
  console.log(getBudgets(persons2)); // Résultat : 62600
  