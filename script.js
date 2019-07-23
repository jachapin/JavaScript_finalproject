/**
 * Final Project
 * WEB 124
 * @author Jeff Chapin
 */

 /** Functions */

 // Objective 1  Manipulate the DOM
var colorChange;

function changeStyle() {
    if(!colorChange) {
        var elbody = document.getElementsByTagName('body');
        elbody[0].className = 'redbg';
        var elh1 = document.getElementById('heading');
        elh1.className = 'redh1';
        var elements = document.getElementsByTagName('h2');
        for (var i = 0; i < elements.length; i++) {
            elements[i].className = 'red';
        }
        colorChange = true;
    } else {
        var elbody = document.getElementsByTagName('body');
        elbody[0].className="";
        var elh1 = document.getElementById('heading');
        elh1.className = "";
        var elements = document.getElementsByTagName('h2');
        for (var i = 0; i < elements.length; i++) {
            elements[i].className = "";
        }
        colorChange = false;
    }
}

 //Objective 2  Add and remove HyperText Markup Language (HTML) document nodes
function addElement() {
    var elNav = document.createElement('nav');
    var newText = document.createTextNode('This final project created by Jeff Chapin');
    elNav.appendChild(newText);
    var position = document.getElementsByTagName('h1')[0];
    position.appendChild(elNav);
}


// Objective 3  Control the BOM
function controlBOM() {
    var message = "The current page location is " + window.location +  
    " and the number of items in your history is " + window.history.length + ". Now we will print the page!";
    window.alert(message);
    window.print();
}

// Objective 4  Enhance and validate form data
function formVerification() {
    var userData = document.getElementById("zip").value;
    var zipLabel = document.getElementById("zipLabel");
    if(userData.length != 5) {
        zipLabel.innerText = 'Please enter a 5-digit ZIP code. Must be five digits*';
        zipLabel.className = 'problem';
    } else if (isNaN(userData)) {
        zipLabel.innerText = 'Please enter a 5-digit ZIP code. Numbers only*'
        zipLabel.className = 'problem';
    } else {
        zipLabel.innerText = 'Please enter a 5-digit ZIP code';
        zipLabel.className = '';
        window.alert('Thank you!');
    }
}

// Objective 5 Create scripts using built-in JavaScript classes
 function daysTillNewYears() {
    var today = new Date();
    var newYear = new Date(2018, 12, 31);
    var daysUntilNewYear = newYear.getDate() - today.getDate();
    var elShowDays = document.getElementById('showDays');
    elShowDays.innerText = "Today's date is " + today.toDateString() + ". There are " + daysUntilNewYear + " days until New Year's Day."
 }

 // Objective 6 Manipulate data in strings and arrays
 var cities = new Array();

 function addCity() {
    cities.push(document.getElementById("cityArray").value);
 }
 function cityArray() {
    cities.sort();
    document.getElementById('citiesOutput').innerText = cities.toString(); 
 }

 // Objective 7  Validate JavaScript and apply advanced debugging techniques
function debugging() {
    try {
    el = document.getElementById("debugging");
    el.innerHTML = "<ul><li>Use throw, try-catch, finally to handle exceptions.</li><li>Use the debugger in the browser. Ctrl+Shift+S in Firefox. Ctrl+shift+J in Chrome.</li><li>Use jslint.com</li></ul> "
    } catch {
        console.log("Exception thrown.")
    }
    finally {
        console.log("Always test your app!")
    }
}

 //Objective 8 Apply coding techniques to address JavaScript security issue
 function xSSAttack() {
    var badCode = document.getElementById('insecure').value;
    var crazyComments = document.getElementById('crazyComments').innerHTML;
    crazyComments.innerHTML = badCode;
    document.getElementById("test").innerHTML = "Test";
 }


 /** Event Listeners */
 var elObjective1 = document.getElementById('objective1');
 elObjective1.addEventListener('click', changeStyle, false);

 var elObjective2 = document.getElementById('objective2');
 elObjective2.addEventListener('click', addElement, false);

 var elObjective3 = document.getElementById('objective3');
 elObjective3.addEventListener('click', controlBOM, false);

 var elObjective4 = document.getElementById('objective4');
 elObjective4.addEventListener('click', formVerification, false);
 var  elzip = document.getElementById("zip");
 elzip.addEventListener('blur', formVerification, false);

 var elObjective5 = document.getElementById('objective5');
 elObjective5.addEventListener('click', daysTillNewYears, false);

var elAddCity = document.getElementById('addCity');
elAddCity.addEventListener('click', addCity, false);
var elObjective6 = document.getElementById('objective6');
elObjective6.addEventListener('click', cityArray, false);

var elObjective7 = document.getElementById('objective7');
elObjective7.addEventListener('click', debugging, false);

var elObjective8 = document.getElementById('objective8');
elObjective8.addEventListener('click', xSSAttack, false);