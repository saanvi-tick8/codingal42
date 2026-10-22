function prof()
{
let student = {

    name:'saanvi',
    age:14,
    school:'gdgps',
    grade:9,
    hobbies:'art'



}

let colors =
 ["pink","blue","green"]

 document.getElementById("demo").innerHTML=student.name+""+"is" + student.age +"years old and goes to "+ "" +student.school
 document.getElementById("pig").innerHTML="Before Poping the colors are: " + color.join("^");

document.getElementById("sick").innerHTML= student.name +""+ colors[2]+"" + "is the favourite colour";
color.pop();
document.getElementById("dog").innerHTML="After Poping the colors are : " + color.join("*");
}
