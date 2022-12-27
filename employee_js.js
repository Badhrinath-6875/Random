let btn = document.querySelector("#bttn");
let btn1 = document.querySelector("#greaterThan");
let btn2 = document.querySelector("#joining");
let myTable = document.querySelector("#table");
let emp,emp_header;
getText('https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json');
async function getText(file) {
  let myFile = await fetch(file);
  let y = await myFile.json();
  emp = y.Employees;
  emp_header = Object.keys(emp[0]);
}
btn.addEventListener('click',()=>{
    let table = document.createElement('table');
    let header = document.createElement('tr');
    for(var i=0;i<emp_header.length;i++){
        var cell = document.createElement('th');
        cell.innerText = emp_header[i];
        header.append(cell);
    }
    table.append(header);
    for(var i=0;i<emp.length;i++){
        var row = document.createElement('tr');
        for(var j=0;j<emp_header.length;j++){
            var cell = document.createElement('td');
            var key = emp_header[j];
            cell.innerText = emp[i][key];
            row.append(cell);
        }
        table.append(row);
    }
    myTable.append(table);
});
btn1.addEventListener('click',()=>{
    document.write("Employees with salary greater than 50k <br>");
    for(var i=0;i<emp.length;i++){
        if(emp[i]["Salary"]>50000){
            document.write(emp[i]["Name"]+"<br>");
        }
    }
});
btn2.addEventListener('click',()=>{
    document.write("Employees who joined in the month of december<br>");
    for(var i=0;i<emp.length;i++){
        var date = emp[i]["DateOfJoining"];
        if(date.split("-")[1]==12){
            document.write(emp[i]["Name"]+"<br>");
        }
    }
});


