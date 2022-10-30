(function(){
let addToCartBtn = document.querySelectorAll(".addToCartBtn");
let cart = document.querySelector("aside");
let sum = document.querySelector("h4");


addToCartBtn.forEach((but) => {
  but.addEventListener("click", (e) => {
    let btnClicked = e.target;
    let countryChosen = btnClicked.parentElement;
    let country = countryChosen.querySelector("p").innerText;
    let price = countryChosen.querySelector("span").innerText;
    let total = Number(price);
    let difprices = cart.querySelectorAll("span");

    //add to cart magic
    let div = document.createElement('div');
    let insideDiv = `<p>${country} - <span>${price}</span> - <button type="button" class="remove">Remove</button></p>`;
    div.innerHTML = insideDiv;
    cart.append(div);
    let removeBtn = document.querySelectorAll(".remove");

    //keep total price accurate on each iteration
    difprices.forEach((dif) => {
      total += Number(dif.innerText);
      })

    //remove button control
    removeBtn.forEach((rem) => {
      rem.addEventListener("click", (f) => {
        let rembtncli = f.target;
        let parentrem = rembtncli.parentElement;
        total -= Number(parentrem.querySelector("span").innerText);
        sum.innerHTML = total;
        parentrem.remove();
      })
    })

     sum.innerHTML = total;

  })
})

})();

/*
#################################
Test 1 
Quiz link: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php
#################################
let txt = `Window size: width=" + ${w} + ", height=" + ${h}`;

let exp = document.getElementsByTagName("p")
let button = document.querySelector("#jsstyle")

function change (){
  exp[0].style.fontFamily = "Trebuchet MS";
  exp[0].style.fontSize = "3rem";
  exp[0].style.color = "red";
}

button.addEventListener("click", change);
*/
/*
#################################
Test 2
#################################

function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}
*/
/*
#################################
Test 3
#################################
const body = document.querySelector("body")
const result = document.querySelector("#result")
const submit2 = document.querySelector("#submit2")

function test2(){
  body.style.backgroundColor  = "yellow"; 
}

submit2.addEventListener("click", test2)
*/
/*
#################################
Test 4
#################################

 var u = document.getElementById("w3r").href;
 alert('The value of the href attribute of the link is : '+u);

 const aaa = document.querySelector("a")
const button = document.querySelector("button")

function test2(){
  let ans1  = aaa.getAttribute("href") ; 
  let ans2  = aaa.getAttribute("hreflang") ;
  let ans3  = aaa.getAttribute("rel") ;
  let ans4  = aaa.getAttribute("target") ;
  let ans5  = aaa.getAttribute("type") ;
  console.log(ans1);
  console.log(ans2);
  console.log(ans3);
  console.log(ans4);
  console.log(ans5);
}
button.addEventListener("click", test2);
*/
/*
#################################
Test 5
#################################
const table = document.querySelector("#sampleTable");
const button = document.querySelector("input")

function test2(){
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}

button.addEventListener("click", test2)
*/
/*
#################################
Test 6
Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell. 
#################################
function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}
*/
/*
#################################
Test 7
Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell. 
#################################
const table = document.querySelector("#myTable");
const button = document.querySelector("input")

function test2() {
  const tblBody = document.createElement("tbody");
  rn = window.prompt("Input Row number 1-9", "input");
  cn = window.prompt("Input Column number 1-9","input");

  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
  
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
      tblBody.appendChild(row);
  }
  table.appendChild(tblBody);
  table.setAttribute("border", "2");
}

button.addEventListener("click", test2)
*/
/*
#################################
Test 8
Write a JavaScript program to remove items from a dropdown list.  
#################################
const select = document.querySelector("#colorSelect");
const button = document.querySelector("input")
const result = document.querySelector("#result")

function display() {
  sel = select.selectedIndex;
  result.innerHTML = `Option ${sel} will be removed, Please click the button.`;
}

function remove() {
  select.remove(select.selectedIndex);
}

select.addEventListener("change", display)
button.addEventListener("click", remove)
*/
/*
#################################
Test 9
Write a JavaScript program to count and display the items of a dropdown list, in an alert window.  
#################################
const select = document.querySelector("#mySelect");
const button = document.querySelector("input")
const result = document.querySelector("#result")

function display(e) {
  sel = select.children.length;
  result.innerHTML = `The count of the drop down list is ${sel} and option chosen is ${e.srcElement[select.selectedIndex].label}`;
  console.log(e);
}

function pop() {
  let output = "Length : " + select.length + " . and the colors are : ";
  for (let i = 0; i < select.length; i++) {
    output += select.options[i].text + " ";
  }
  window.alert(output);
}

select.addEventListener("change", display)
button.addEventListener("click", pop)
*/
/*
#################################
Test 10
Write a JavaScript program to calculate the volume of a sphere  
#################################
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
const button = document.getElementById("submit");


function pop() {
  let rc = Math.pow(radius.value, 3);
  let result = rc * 4.1867;
  volume.value = result.toFixed(4);
}

button.addEventListener("click", pop)
*/
/*
#################################
Test 11
Write a JavaScript program to display a random image (clicking on a button) from the following list
#################################
const button = document.getElementById("button");
let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++)
{images[i].setAttribute('hidden', true);}

function pop() {
  let rand = Math.floor(Math.random()*images.length);
  images[rand].removeAttribute('hidden');
}

button.addEventListener("click", pop)
*/
/*
#################################
Test 12
Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link
#################################
const button = document.getElementById("button");
let span = document.getElementsByTagName("span")

function pop() {
  for(let i = 0; i < span.length; i++)
  {span[i].classList.add("mo");}
}

button.addEventListener("mouseover", pop)
*/
/*
#################################
Test 13
Write a JavaScript program to get the width and height of the window (any time the window is resized). 
#################################
let height = document.querySelector("#height");
let width = document.querySelector("#width");

function pop() {
  height.textContent = window.innerHeight;
  width.textContent = window.innerWidth;
}

window.addEventListener("resize", pop)
*/
/*
https://crocoder.dev/blog/the-dom-exercises/
#################################
Test 14
You are given some names of different fruit and an unordered list html element; add a list item for each to the unordered list.
#################################
<ul></ul>
const fruitList = ['apple', 'banana', 'tomato' ];

const button = document.querySelector("button")
const unorder = document.querySelector("ul")
const fruitList = ['apple', 'banana', 'tomato' ];

function test2() {
fruitList.forEach(fruit => {
  let li = document.createElement("li");
  unorder.appendChild(li);
  li.textContent = fruit;
})
}

button.addEventListener("click", test2)
*/
/*
#################################
Test 15
Change the text in the first and the last list item element in every unordered list element on this page. Change it to 'first' and 'last'.
#################################
const button = document.querySelector("button")
const unorder = document.querySelectorAll("ul")

function test2() {
  unorder.forEach(list => {
    list.firstElementChild.textContent = 'first';
    list.lastElementChild.textContent = 'last';
})
}

button.addEventListener("click", test2)
*/
/*
#################################
Test 16
Add the CroCoder logo (image element) as a child element to the existing div element.
#################################
const button = document.querySelector("button")
const pee = document.querySelector("p")

function test2() {
  let img = document.createElement("img");
  img.setAttribute("src", "https://crocoder.dev/icon.png");
  pee.appendChild(img);
}

button.addEventListener("click", test2)
*/
/*
#################################
Test 17
Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
https://dev.to/codebubb/javascript-dom-practice-exercises-for-beginners-21ml
#################################
Paragraph turned to array so map can be ran, afterwards turned back to spring.
innerHTML turned to pain text innertext which now has tags co code able to work.

const button = document.querySelector("button");
let pee = document.querySelector("p");

function magic() {
pee.innerHTML = pee.innerText
.split(" ")
.map(word => word.length > 8? `<span style="background-color: yellow">${word}</span>` : word).
join(" ");
}

button.addEventListener("click", magic)
*/
/*
#################################
Test 18
Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲)
https://dev.to/codebubb/javascript-dom-practice-exercises-for-beginners-21ml
#################################
const button = document.querySelector("button");
let pee = document.querySelector("p");

function magic() {
  pee.innerHTML = pee.innerText.split(" ")
  .map(leta => leta.match(/\!/g) ? leta.replace(/\!/g, '&#128562;') : leta)
  .map(leta => leta.match(/\?/g) ? leta.replace(/\?/g, '&#129300;') : leta)
  .join(" ");
}

button.addEventListener("click", magic)
*/
/*
#################################
Test 19
Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
https://dev.to/codebubb/javascript-dom-practice-exercises-for-beginners-21ml
#################################
let typing = document.querySelectorAll("input");
let pee = document.querySelectorAll("p");

function magic() {
 
  for (i = 0; i < typing.length; i++) 
  {
    if (typing[i].value.match(/.+/))
    pee[i].classList.add("hide");
  }
}

typing.forEach(item => {item.addEventListener("input", magic)});
*/
/*
#################################
Test 20
To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.
https://dev.to/codebubb/javascript-dom-practice-exercises-for-beginners-21ml
#################################
let container = document.querySelector(".container");
let proplan = document.querySelector("#pro-plan");
let basicplan = document.querySelector("#basic-plan");
const swap = document.querySelector(".swap")

function magic() {
  container.insertBefore(basicplan, proplan);
}

swap.addEventListener("click", magic);
*/
/*
#################################
Test 21
To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now'
https://dev.to/codebubb/javascript-dom-practice-exercises-for-beginners-21ml
#################################
let button = document.querySelectorAll(".btn");
const transform = document.querySelector(".transform")

function magic() {
  button.forEach(but => {
    but.classList.add("spice");
    but.textContent = "Buy Now";
  });
}

transform.addEventListener("click", magic);
*/
/*
#################################
Test 22
Change Background Color
https://jsbeginners.com/change-background-color-project/
#################################
let button = document.querySelector("button");
let body = document.querySelector("body");
let arr = ["red","pink","orange","gold","yellow","green","blue","brown","black"];


function magic() {
let i = Math.floor(Math.random() * arr.length);
body.style.backgroundColor = arr[i];
console.log(arr[i]);
}

button.addEventListener("click", magic);
*/
/*
#################################
Test 23
Hex Change Background Color
https://jsbeginners.com/hex-change-background-color-project/
#################################
let button = document.querySelector("button");
let body = document.querySelector("body");
let hone = document.querySelector("h1");


function magic() {
let i = Math.floor(Math.random()*16777215).toString(16);
let rainbow = `#${i}`
body.style.backgroundColor = rainbow;
hone.textContent = `HEX COLOR: ${rainbow}`
}

button.addEventListener("click", magic);
*/
/*
#################################
Test 24
Random Quotes
https://jsbeginners.com/random-quotes-project/
#################################
const quotes = [{
  quote: `"The Road less traveled."`,
  person: `Barrack Obama`
}, {
  quote: `"We no dey give shi shi."`,
  person: `Peter Obi`
}, {
  quote: `"Sign of life."`,
  person: `BAT Tinubu`
}, {
  quote: `"Born to rule."`,
  person: `Atiku Mikano`
}, ];

let button = document.querySelector("button");
let hone = document.querySelector("h1");
let htwo = document.querySelector("h2");

function magic() {
let i = Math.floor(Math.random() * quotes.length);
hone.textContent = quotes[i].quote;
htwo.textContent = quotes[i].person;
}

button.addEventListener("click", magic);
*/
/*
#################################
Test 25
Pass The Message
After you enter text into the input box, upon pressing the “Enter” key, your message should show up in the “Last Message Delivered” Section.
After the “Enter” key is pressed, the text box value should return to an empty text box.
If no input is submitted, an alert should show (using the ‘show' class in the CSS file) in the “Last Message Delivered” section and then disappear after 2 second.
https://jsbeginners.com/pass-the-message-project/
#################################
let button = document.querySelector("button");
let input = document.querySelector("input");
let mistake = document.querySelector(".mistake");
let recap = document.querySelector(".recap");

function magic() {
  if (input.value === ""){
    mistake.classList.remove("hide");
    setTimeout(() => {
      mistake.classList.add("hide");
    }, 3000);
    } else {
      recap.textContent = input.value;
      input.value = "";
    }
}

button.addEventListener("click", magic);
*/
/*
#################################
Test 26
Counter
The default counter begins at the number 0.
When you click “Lower Count”, the counter should decrement by 1.  If the count goes below 0, the number should change to the color red.
When you click “Add Count”, the counter should increment by 1. If the count goes above 0, the number should change to the color green.
https://jsbeginners.com/counter-project/

//All variables declared in global scope so they are available all through.
Writing code as Immediately Invoked Function Expression (IIFE) could have worked too, but i couldn't hack it
forEach done as 2 event buttons needed to have different effects. Listener also added in forEach so color if statement and counter.textContent could be globally available within code.
#################################
let buttons = document.querySelectorAll("button");
let counter = document.querySelector("#counter");
let count = 0 

buttons.forEach((but) => {
  but.addEventListener('click', function(){
  if (but.classList.contains('lower')){
    count--
  } else if (but.classList.contains('add')){
    count++
  }
  counter.textContent = count;

  if (count > 0) {counter.style.color = "green";}
  else if (count < 0)  {counter.style.color = "red";}
  else {counter.style.color = "yellow";}

})
});
*/
/*
#################################
Test 27
Cycling through Array Continuous endless infinite loop method 1
#################################
let names = ["Ray", "Robert", "Marie", "Frank", "Deborah"];
let count = 0;

function cycleArray() {
  let name = names[count];
  console.log(name);

  count++;

  if (count === names.length) {
    count = 0;
  }
}

setInterval(cycleArray, 200);
*/
/*
#################################
Test 28
Cycling through Array Continuous endless infinite loop method 2
#################################
let show = document.querySelector("#show");
let names = ["Ray1", "Robert2", "Marie3", "Frank4", "Deborah5"];
let count = 0;

function cycleArray() {
  let index = count % names.length;
  show.textContent = names[index];
  count++;
}

setInterval(cycleArray, 3000);
*/
/*
#################################
Test 29
Background Image Slider
https://jsbeginners.com/background-image-slider-project/
#################################
const pictures = ["p0brazil","p1ghana","p2nigeria","p3southafrica","p4unitedkingdom"];
let buttons = document.querySelectorAll("button");
let show = document.querySelector("#show");
let count = 0;

buttons.forEach((but) => {
  but.addEventListener('click', function(e){
    
    if (but.classList.contains('backward')){
      count--
      if(count < 0){
        count = pictures.length - 1
      }
      show.style.backgroundImage = `url('./images/${pictures[count]}.jpg')`
      show.textContent = pictures[count];
    }
    if (but.classList.contains('forward')){
      count++
      if(count > pictures.length - 1){
        count = 0
      }
      show.style.backgroundImage = `url('./images/${pictures[count]}.jpg')`
      show.textContent = pictures[count];
  }

})
});
*/
/*
#################################
Test 30
Filter
https://jsbeginners.com/filter-project/

dataset used because it's a class. button dataset property values and div classes property values have same names.
so if event happens on button with class X, div also with class X will show.
internal CSS works over external. So .style.display is good, while .classList.add bad as 2 selectors conflicting
#################################
(function(){

  let buttons = document.querySelectorAll("button");
  let div = document.querySelectorAll("div");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;
      
      div.forEach((item) =>{
      if (filter === "all") {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filter)){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        } }
      })
    })
  })

})();

(function(){
  let input = document.querySelector("input");
  let div = document.querySelectorAll("div");

  input.addEventListener('keyup', (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();

    div.forEach((item) => {
      if (item.textContent.includes(searchFilter)){
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  })
  })
})();
*/
/*
#################################
Test 31
Modal 
https://jsbeginners.com/modal-javascript-project/

HTML, CSS and javascript same as for Test 30
Only ish wrong with this project is that model doesn't popup (need to explore CSS to effect that), so close behavior cant be effected.
#################################
(function(){

  let buttons = document.querySelectorAll("button");
  let div = document.querySelectorAll("div");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;
      
      div.forEach((item) =>{
      if (filter === "all") {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filter)){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        } }
      })
    })
  })

})();

(function(){
  let input = document.querySelector("input");
  let div = document.querySelectorAll("div");

  input.addEventListener('keyup', (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();

    div.forEach((item) => {
      if (item.textContent.includes(searchFilter)){
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  })
  })
})();

(function() {
  let div = document.querySelectorAll("div");
  let img = document.querySelectorAll("img");
  let body = document.querySelector("body");
  let left = document.querySelector(".left");
  let right = document.querySelector(".right");
  let imageList = [];
  let imageCounter = 0;

  img.forEach((image) => {
    imageList.push(image.src)
  })

  div.forEach((divs) =>{
  divs.addEventListener("click",(e) => {
  let image = e.target.src;
  body.style.backgroundImage = `url(${image})`;
  imageCounter = imageList.indexOf(image);
})
  })

left.addEventListener("click", () =>{
  imageCounter--;
  if (imageCounter < 0){
    imageCounter = imageList.length -1;
  }
  body.style.backgroundImage = `url(${imageList[imageCounter]})`;
})

right.addEventListener("click", () =>{
  imageCounter++;
  if (imageCounter >= imageList.length){
    imageCounter = 0;
  }
  body.style.backgroundImage = `url(${imageList[imageCounter]})`;
})
})();
*/
/*
#################################
Test 32
Calculator
https://jsbeginners.com/calculator-javascript-project/
#################################
(function(){

  let first = document.querySelector(".first");
  let second = document.querySelector(".second");
  let total = document.querySelector(".total");
  let operators = document.querySelectorAll('[data-operator]');

  operators.forEach((ope) => {
    ope.addEventListener("click", (e) => {
      let aa = Number(first.value);
      let bb = Number(second.value);
      let choice = e.target;
      let operator = choice.dataset.operator;
    
      if (operator === "add"){
        let ans = aa + bb;
        total.value = ans;
      } else if (operator === "subtract"){
        let ans = aa - bb;
        total.value = ans;
      } else if (operator === "multiply"){
        let ans = aa * bb;
        total.value = ans;
      } else if (operator === "divide"){
        let ans = aa / bb;
        total.value = ans;
      } 
    })
  })
})();
*/
/*
#################################
Test 33
Tip Form Calculator
https://jsbeginners.com/tip-form-javascript-project/
#################################
(function(){
  let calculate = document.querySelector("button");

    calculate.addEventListener("click", () => {
      
      let howmuch = Number(document.querySelector(".howmuch").value);
      let howmany = Number(document.querySelector(".howmany").value);
      let chooseone = Number(document.querySelector('#chooseone').value);

      let tip = chooseone * howmuch;
      tip = tip.toFixed(2);
      document.querySelector(".tip").value = Intl.NumberFormat().format(tip);

      let total = Number(tip) + howmuch;
      total =  total.toFixed(2);
      document.querySelector(".total").value = Intl.NumberFormat().format(total);

      let split = Number(total)/howmany;
      split = split.toFixed(2);
      document.querySelector(".split").value = Intl.NumberFormat().format(split);
    })
})();
*/
/*
#################################
Test 34
Todo List
https://jsbeginners.com/todo-list-javascript-project-v1/
#################################
(function(){
  let input = document.querySelector("input");
  let add = document.querySelector(".add");
  let clear = document.querySelector(".clear");
  let article = document.querySelector("article");

    add.addEventListener("click", () => {
      
      let task = document.createElement('p');
      task.classList.add('task');

      let li = document.createElement('li');
      li.innerText = input.value;
      task.appendChild(li);

      let deletebtn = document.createElement("button");
      deletebtn.textContent = "Delete";
      task.appendChild(deletebtn);

      article.appendChild(task);

      input.value = ""; //to clear input field after every task added

      deletebtn.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.remove();
      });

      clear.addEventListener("click", () =>{
        if (task){
          task.remove();
          }
      })
    })
})();
*/