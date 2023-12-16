const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i = 0;i<data.length;i++){
        if(data[i].profession === "developer"){
             console.log(data[0].name);
        }
  }
}
  
  // 2. Add Data
  function addData() {
    let name = prompt("Enter name:");
    let age = parseInt(prompt("Enter age:"));
    let profession = prompt("Enter profession:");

    // Push the new data object to the data array
    data.push({ name, age, profession });

    // Log the updated data array
    console.log(data);
}

  
  // 3. Remove Admins
  function removeAdmin() {
     for(let i = 0;i<data.length;i++)
     {
        if(data[i].profession === "admin"){
            data.pop(data[i]);
        }
     }
     console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
      let data2 = [
        {
            name : "rahul",
            age : 21,
            profession : "engineer"
        },
        {
            name : "priya",
            age : 25,
            profession : "HR"
        }
      ]
     let sum =  data.concat(data2);
      console.log(sum);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0 , ct = 0;

      for(let i = 0;i<data.length;i++)
      {
        sum += data[i].age;
        ct++;
      }
    let AvAge = sum / ct;
    console.log(AvAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let ct = 0;
    for(let i = 0;i<data.length;i++)
    {
        if(data[i].age > 25){
           ct++;
        }
    }
    if(ct>=1){
        console.log("There's at least one person above the age of 25.");
    }
    else {
        console.log("There's no person above the age of 25.");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
        for(let i = 0;i<data.length;i++)
        {
            let ct = 0;
            for(let j = 0;j<data.length;j++){
                 if(data[i].profession === data[j].profession){
                    ct++;
                 }
            }
            if(ct===1){
                console.log(data[i].profession);
            }
        }
       
  }
  
  // 8. Sort by Age
  function sortByAge() {
       data.sort((a,b)=>{
            return (a.age - b.age);
       })
       console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
          for(let i = 0;i<data.length;i++)
          {
            if(data[i].name === "john"){
                data[i].profession = "Manager";
            }
          }
          console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let TotalAdmin = 0, TotalDev = 0;
         for(let i = 0;i<data.length;i++)
         {
             if(data[i].profession === "admin"){
                TotalAdmin ++;
             }
             if(data[i].profession === "developer"){
                TotalDev ++;
             }
         }
         console.log(TotalAdmin , TotalDev);
  };