// Question 1

// document.getElementById("signupForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent page reload


//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;


//   document.getElementById("displayData").innerHTML = `
//     <h3>Form Submitted Successfully!</h3>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Password:</strong> ${password}</p>
//   `;
// });

// Question 2

// document.getElementById("moreText").style.display = "none";


// document.getElementById("readMoreBtn").addEventListener("click", function() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("moreText");
//   var btnText = document.getElementById("readMoreBtn");

//   if (moreText.style.display === "none") {
//     moreText.style.display = "inline";
//     dots.style.display = "none";
//     btnText.innerHTML = "Read Less";
//   } else {
//     moreText.style.display = "none";
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read More";
//   }
// });

// Question 3

// let selectedRow = null;


// document.getElementById("studentForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   let name = document.getElementById("name").value;
//   let age = document.getElementById("age").value;
//   let grade = document.getElementById("grade").value;

//   let table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

//   let newRow = table.insertRow();

//   newRow.insertCell(0).innerHTML = name;
//   newRow.insertCell(1).innerHTML = age;
//   newRow.insertCell(2).innerHTML = grade;
//   newRow.insertCell(3).innerHTML = `
//     <button onclick="editStudent(this)">Edit</button>
//     <button onclick="deleteStudent(this)">Delete</button>
//   `;

  
//   document.getElementById("studentForm").reset();
// });

// // Delete student row
// function deleteStudent(btn) {
//   let row = btn.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }


// function editStudent(btn) {
//   selectedRow = btn.parentNode.parentNode;

  
//   let name = selectedRow.cells[0].innerHTML;
//   let age = selectedRow.cells[1].innerHTML;
//   let grade = selectedRow.cells[2].innerHTML;

//   // Set them in the edit form
//   document.getElementById("editName").value = name;
//   document.getElementById("editAge").value = age;
//   document.getElementById("editGrade").value = grade;

 
//   document.getElementById("editSection").style.display = "block";
// }


// document.getElementById("editForm").addEventListener("submit", function(event) {
//   event.preventDefault();

 
//   selectedRow.cells[0].innerHTML = document.getElementById("editName").value;
//   selectedRow.cells[1].innerHTML = document.getElementById("editAge").value;
//   selectedRow.cells[2].innerHTML = document.getElementById("editGrade").value;

 
//   document.getElementById("editSection").style.display = "none";

//   selectedRow = null;
// });


// document.getElementById("cancelEdit").addEventListener("click", function() {
//   document.getElementById("editSection").style.display = "none";
//   selectedRow = null;
// });