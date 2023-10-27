//console.log("Hello")

var listitem =  document.getElementsByClassName("list-group-item")
//listitem[2].style.backgroundColor="green";

for(var i=0;i<listitem.length;i++)
{
    listitem[i].style.fontWeight = "bold"
}

//var newitem = document.getElementsByClassName("anotherclass")
//newitem[0].style.color='blue';

//var lastitem = document.getElementsByTagName("li")
//lastitem[4].style.fontWeight='bold';

//QUERYSELECTOR//

var secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
//thirdItem.style.display = 'none';

//QUERYSELECTORALL//

var odditems = document.querySelectorAll('li:nth-child(odd)')
console.log(odditems)

for(var i=0;i<odditems.length;i++)
{
    odditems[i].style.backgroundColor = 'green'
}