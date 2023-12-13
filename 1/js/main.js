const li2 = document.createElement("li");
const aboutLink = document.createElement("a");
aboutLink.href = "#";
aboutLink.innerHTML = "About Us";
li2.setAttribute('id', 'li2');
li2.append(aboutLink);


const li4 = document.createElement("li");
const teamLink = document.createElement("a");
teamLink.href = "#"
teamLink.innerHTML = "Our Team";
li4.setAttribute('id', 'li4');
li4.append(teamLink);


const li1 = document.getElementById('li1');
const li3 = document.getElementById('li3');
const li5 = document.getElementById('li5');

li1.after(li2);
li5.before(li4);
