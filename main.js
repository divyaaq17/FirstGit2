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

//parentelement\
var itemlist = document.querySelector("#items");
itemlist.parentElement.style.backgroundColor="#f4f4f4";

//'children' are preferred over 'childnodes'
//childnode gives nodelist, children gives htmlcollection

itemlist.children[3].style.backgroundColor="yellow";

//lastchildelement
itemlist.lastElementChild.textContent ="Hello 4";

//last child
console.log(itemlist.lastChild)

//nextsibling
console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling)

//previoussibling
console.log(itemlist.previousSibling)
console.log(itemlist.previousElementSibling)


//create new element
var newDiv = document.createElement("div")
//newDiv.className="Hello";
newDiv.id="hello1";
newDiv.setAttribute("title","newtitle");

var newtextnode = document.createTextNode('Hello World');
newDiv.appendChild(newtextnode)


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

container.insertBefore(newDiv,h1);

//new element before Item1

//create new element
var newDiv2 = document.createElement("div")
//newDiv.className="Hello";
newDiv2.id="hello2";
newDiv2.setAttribute("title","newtitle2");
var newtextnode2 = document.createTextNode('Hello World');
newDiv2.appendChild(newtextnode2)

var items = document.querySelector('div #items')
var firstItem=  document.querySelector('div li')

items.insertBefore(newDiv2,firstItem)