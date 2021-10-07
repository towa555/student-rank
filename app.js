
//the student entity should have properties of ,name, age,class,average

let student_0 =

  {
     Name: "karl",
     Age: 12,
     Class:5,
     Average:15,
    }

//======================================


//==============================
// creating another data structure to hold a list of 10 studentList

let student_List = [

  {  Name: "karl",
  Age: 12,
  Class:'form 5',
  Average:15},
  
  { Name: "marcgregore",
  Age: 15,
  Class:'form 5',
  Average:10},
  
  {Name: "krafchenco",
  Age: 17,
  Class:'form 5',
  Average:12},
  
  {Name: "ben",
  Age: 18,
  Class:'form 5',
  Average:10},
  
  {Name: "phil",
  Age: 19,
  Class:'form 5',
  Average:15},
  
  {Name: "rachel",
  Age: 16,
  Class:'form 5',
  Average:13.5},
  
  {Name: "joel",
  Age: 17,
  Class:'form 5',
  Average:14.4},
  
  {Name: "towa",
  Age: 18,
  Class:'form 5',
  Average:16.5},
  
  {Name: "mark",
  Age: 17,
  Class:'form 5',
  Average:14.7},

    
  {Name: "Dominic",
  Age: 19,
  Class:'form 5',
  Average:14.7}
  
  
  ]
//write an algorithm to to rank the students in order of merit
//this code sorts the student average in ascending order..
/*
employee.sort((a,b) =>{
  return a.Age - b.Age;
});
//to dispact the student,you use the forEach() methode
employee.forEach((e) =>{
  console.log(`${e.Name} ${e.Age}`);
})
*/
// to sort the average of the students in descending order,
//you just need to reverse the order in the comparism function
student_List.sort((a,b) => b.Average - a.Average );

student_List.forEach((e) =>{
  console.log(`name = ${e.Name}  age = ${e.Age} class= ${e.Class} ,has an average of = ${e.Average }`);
})

