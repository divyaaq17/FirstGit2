//console.log("Hello")

var listitem =  document.getElementsByClassName("list-group-item")
listitem[2].style.backgroundColor="green";

for(var i=0;i<listitem.length;i++)
{
    listitem[i].style.fontWeight = "bold"
}
