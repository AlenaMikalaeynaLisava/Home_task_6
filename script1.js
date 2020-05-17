let ul = document.createElement('ul');
document.body.append(ul);
let li1 = document.createElement('li');
li1.innerText = "Bla1";
ul.prepend(li1);
let li2 = document.createElement('li');
li2.innerText = "Bla2";
ul.append(li2);


let allElementsOfDocument = document.getElementsByTagName('body');
let elements = document.getElementsByTagName('li');
let listOfElements=document.getElementsByTagName('ul');
let example_class_1 = document.getElementsByClassName('example_class_1')[0];


for (let elem of allElementsOfDocument) {
    elem.addEventListener('click', function(){
        console.log(elem); 
        a=event.target;
        if (a == elements[0]||a ==elements[1]){a.classList.add('bold');
    }else if(a != listOfElements){elements[0].classList.remove('bold');elements[1].classList.remove('bold'); }
       return; 
    });
}
  
