const mainList = document.querySelector('ul');

const inputEle = document.querySelector('input');

const clicker = document.querySelector('#clicker');
undefined
clicker.addEventListener('click',function() {
    if(inputEle.value.length > 3){
        let li = document.createElement('li');
        let tempNode = document.createTextNode(inputEle.value);
        li.appendChild(tempNode);
        mainList.appendChild(li);
    }});