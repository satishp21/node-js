var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newdescription = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  var newTExt = document.createTextNode(newItem);
  var desC = document.createTextNode(newdescription);
  
  li.appendChild(newTExt);
  li.appendChild(desC);
  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var desC= item.childNodes[1].textContent
    if(itemName.toLowerCase().indexOf(text) != -1 || desC.toLowerCase().indexOf(text) != -1 ){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
    
  });
}
var itemList = document.querySelector('#items')
var newbutton = document.createElement('"list-group"')
newbutton.className='e'
newbutton.id='hello1';
newbutton.setAttribute('title','Hello Div');
var newbuttonText = document.createTextNode('hello world');
newbutton.appendChild(newbuttonText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')
// container.insertBefore(newDiv,h1);  
// newDiv.style.fontSize='30px'
