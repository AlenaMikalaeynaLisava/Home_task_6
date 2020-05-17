let ul = document.createElement('ul');
ul.className = "example_class_1";
document.body.append(ul);

let li1 = document.createElement('li');
li1.innerText = "User";
ul.append(li1);

let ul1 = document.createElement('ul');
ul1.className = "example_class_2";
li1.append(ul1);

let li2 = document.createElement('li');
li2.innerText = "Super User";
ul1.prepend(li2);

let ul2 = document.createElement('ul');
ul2.className = "example_class_3";
li2.append(ul2);

let li3 = document.createElement('li');
li3.innerText = "Admin";
ul2.append(li3);

let li4 = document.createElement('li');
li4.innerText = "Power Userr";
ul1.append(li4);


let allElements = document.getElementsByTagName('body')[0];
let liInUl = document.querySelectorAll('ul>li');

function putTextInBold(){
    let ulul = event.target.closest('.example_class_1'); 
    let li = event.target;
    console.log(li);
    console.log(li.classList[0]);
    if (!ulul) {
        for (let elem1 of liInUl){
        elem1.classList.remove('bold')}; 
        return;
        } 
    if (li.classList[0]=='example_class_1'){
            return;
        }
    
    li.classList.add('bold'); 
  
   alert(li.firstChild.data);
   return;
};
allElements.addEventListener("click", putTextInBold ); 

