var empArray=[];

var employees = function(name)
{
this.empName=name;
//console.log("Print the name of Employee")
}

empArray.push(new employees('Prabha Nigam'));
empArray.push(new employees('Nidhi Dhakad'));
empArray.push(new employees('Somya Burman'));
empArray.push(new employees('Anubha Joshi'));
empArray.push(new employees('Sourav Sharma'));
empArray.push(new employees('Himanshu Sagar'));

display = function(){
    console.log(empArray);
} 

display();



















