let a=prompt("enter the name")
let b=prompt("start slice")
let c=prompt("stop")
if(b != "" && c!= "")
{
  alert(`${a.slice(b,c)}`); 
  return 0;
}
if(b!= "" && c== "")
{
  alert(`${a.slice(b)}`);
  return 0;
}
else
{
   alert("please enter valid number");
}