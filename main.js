/* //console.log("Hello")

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

items.insertBefore(newDiv2,firstItem) */

/* var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e)
{
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var newDesc = document.getElementById('description').value;
    //create new element
    var li = document.createElement('li')
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem));

   // li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(" "+newDesc));
    //create button
    var editBtn = document.createElement('button')
editBtn.className = 'btn btn-danger btn-sm float-right';
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn)
var delButton = document.createElement('button');
delButton.className = 'btn btn-danger btn-sm float-right delete';
delButton.appendChild(document.createTextNode('X'));
li.appendChild(delButton);


    itemList.appendChild(li);
}

//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are You Sure?"))
        {
            var li= e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e)
{
    //convert text to lowercase
var text = e.target.value.toLowerCase();

//get list of items
var items = itemList.getElementsByTagName('li');

//convert into array bcoz items will give html collection
//and we want just names of items

Array.from(items).forEach(function(item){
    
    var itemName = item.firstChild.textContent;
    var itemDescription = item.childNodes[1].textContent;
 //   console.log(itemDescription);
    if(itemName.toLowerCase().indexOf(text) != -1 || itemDescription.toLowerCase().indexOf(text) != -1 )
    {
        item.style.display='block';
    }
    else
    {
        
        item.style.display='none';
    }
});
} */

// CODE FOR LOCAL STORAGE OF USER DETAILS

var addForm = document.getElementById("addUser");
addForm.addEventListener('submit',addUser);

function addUser(e)
{
  //  e.preventDefault();

    var userName = document.getElementById("username").value;
    var age = document.getElementById("age").value;

   // localStorage.setItem(userName,age);

   //STORING OBJECTS

   var myObj ={
    name:userName,
    age:age
   };
   var myObj_serialized = JSON.stringify(myObj);

   localStorage.setItem("myObj",myObj_serialized);

   var myobj_deserialized = JSON.parse(localStorage.getItem("myObj"));
   console.log(myobj_deserialized)
  
}
