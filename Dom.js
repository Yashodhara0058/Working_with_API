// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.getElementById('main'));
// // document.getElementById('main').textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// *********************getElementById*********************
// console.log(document.getElementById('main'));
// var header = document.getElementById('header-title');
// console.log(header);
// header.textContent = 'Hello';
// header.innerText = 'Hii';
// console.log(header.textContent)
// console.log(header.innerText);
// header.innerHTML = '<h4>Hello</h4>';
// header.style.borderBottom = '2px solid white';

// *********************getElementByClass*********************
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// for (let i = 0; i < items.length; i++) {
// 	items[i].style.background = 'red';
// }
// items[3].style.background = 'green';

// *********************getElementByTagName*********************
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// for (let i = 0; i < li.length; i++) {
// 	li[i].style.background = 'red';
// }
// items[3].style.background = 'green';

// *********************querySelector*********************
// let header = document.querySelector('#main-header');
// header.style.borderBottom = "2px solid red";

// var input = document.querySelector('input');
// input.value = 'Dhanalakshmi'

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = "red";

// var item = document.querySelector('.list-group-item:last-child');
// item.style.color = "blue";

// var itemsecond = document.querySelector('.list-group-item:nth-child(2)');
// itemsecond.style.color = "grey";

// *********************QuerySelectorAll*********************
// var title = document.querySelectorAll('.title');
// console.log(title);
// title[0].textContent = 'Hey World';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i =0; i< odd.length; i++)
// {
//     odd[i].style.backgroundColor = "grey";
//     even[i].style.backgroundColor = "#e1d8d8";
// }

// *********************Traversing the Dom*********************

// var itemList = document.querySelector('#items');

// *********************parent Node*********************
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "gray";
// console.log(itemList.parentNode.parentNode.parentNode);

// *********************parentElement*********************
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "gray";
// console.log(itemList.parentElement.parentElement.parentElement);

// *********************Child nodes*********************
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'red';

// *********************First Child*********************
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

// *********************Last Child*********************
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello';

// *********************nextSibling********************* 
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.style.color = 'red';

// *********************previousSibling*********************
// console.log(itemList.previousSibling);
// *********************nextElementSibling*********************
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

// *********************Create div*********************
// let newDiv = document.createElement('div');

// *********************Add class*********************
// newDiv.className ="hello";

// *********************Add id*********************
// newDiv.id = 'hello1';

// *********************Add attr*********************
// newDiv.setAttribute('title','Hello Newdiv');

// *********************Create text node*********************
// var newDivText = document.createTextNode('Hello Everyone!!');

// *********************Add text to div*********************
// newDiv.appendChild(newDivText);

// var container = document.querySelector('div #main');
// var h1 = document.querySelector('div h2');

// console.log(newDiv);

// newDiv.style.fontSize = "30px";
// container.insertBefore(newDiv, h1);


// var button = document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e)
// {
//     // alert('Button Clicked');
//     // document.getElementById('header-title').textContent = 'changed';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>';
//     // console.log(e.type);

//     // console.log(e.clientx);
//     // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mousemove',runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// itemInput.addEventListener('input',runEvent);

// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);

// form.addEventListener('submit',runEvent);

// function runEvent(e){
//     e.preventDefault();
    // console.log('Event Type:'+e.type);
    // document.body.style.display = 'none';
    // alert('Event Triggered');

    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    // output.innerHTML = '<h3>MoseX : '+e.offsetX + '</h3><h3>MouseY: '+e.offsetY + '</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

// }

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);

itemList.addEventListener('click',dltItem);

filter.addEventListener('keyup',fliterItem);

//Function addItem
function addItem(e)
{
    alert('Even Triggered');
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;
    
    //Create new li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //Add class name
    deleteBtn.className = 'btn btn-danger btn-sm delete';

    deleteBtn.style.float = 'right';

    deleteBtn.textContent = 'X';

    li.appendChild(deleteBtn);

    //Add item to the ul
    itemList.appendChild(li);
}

//dlt item
function dltItem(e){
    // console.log(1);
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
            var li =e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Item
function fliterItem(e){
    // alert('Triggered');
    //convert text into lower case
    var text = e.target.value.toLowerCase();
    // console.log(text);
    //get li's
    var items = itemList.getElementsByTagName('li');
    // console.log(items);
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
}