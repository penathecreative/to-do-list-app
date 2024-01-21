// Function that adds a new list of items
function newtask() {
  let inputValue = $("#input").val();

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let li = $("<li>").text(inputValue);
    $("#list").append(li);

    // Crossing out an item from the list of items:
    li.on("click", function () {
      li.toggleClass("strike");
    });

    // Adding the delete button "X":
    let crossOutButton = $("<button>").text("X").addClass("delete");

    // Click event for the delete button:
    crossOutButton.on("click", function (event) {
      $(this).closest("li").remove(); // Remove the closest <li> element
      event.stopPropagation(); // Prevent the click event from triggering on the <li> element
    });

    li.append(crossOutButton);

    // Reordering the items:
    $("#list").sortable();

    // Input text disappears once 'Add' button clicked and item is added to the list of items:
    $("#input").val("");
  }
}

// Call the newtask function on button click
$("#button").on("click", newtask);
