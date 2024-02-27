function toggleActiveState(sectionId) {
  var section = document.getElementById(sectionId);
  if (!section) {
    console.error("Section with ID", sectionId, "does not exist.");
    return;
  }

  var activeElements = document.querySelectorAll(".active");
  activeElements.forEach(function (element) {
    element.classList.remove("active");
    // Hide size and color select elements of the previously active section
    var sizeSelect = element.querySelector(".size-select");
    var colorSelect = element.querySelector(".color-select");
    if (sizeSelect && colorSelect) {
      sizeSelect.classList.add("custom-hidden");
      colorSelect.classList.add("custom-hidden");
    }
    // Hide the "Most Popular" heading of the previously active section
    var heading = element.querySelector(".custom-heading");
    if (heading) {
      heading.classList.remove("active");
    }
  });

  section.classList.add("active");

  // Call the function to toggle size and color based on the selected radio button
  toggleSizeColor(sectionId);

  // Display the "Most Popular" heading if the second section is active
  if (sectionId === "section2") {
    var heading = section.querySelector(".custom-heading");
    if (heading) {
      heading.classList.add("active");
    }
  }
}

function toggleSizeColor(sectionId) {
  console.log("Section ID:", sectionId);

  var radio = document
    .getElementById(sectionId)
    .querySelector('input[type="radio"]');
  console.log("Radio button:", radio);

  var sizeSelect = document
    .getElementById(sectionId)
    .querySelector(".size-select");
  console.log("Size select:", sizeSelect);

  var colorSelect = document
    .getElementById(sectionId)
    .querySelector(".color-select");
  console.log("Color select:", colorSelect);

  if (radio && radio.checked) {
    if (sizeSelect && colorSelect) {
      sizeSelect.classList.remove("custom-hidden");
      colorSelect.classList.remove("custom-hidden");
    }
  } else {
    if (sizeSelect && colorSelect) {
      sizeSelect.classList.add("custom-hidden");
      colorSelect.classList.add("custom-hidden");
    }
  }
}

// Initial setup to hide size and color elements
document.querySelectorAll(".size-select, .color-select").forEach(function (el) {
  el.classList.add("custom-hidden");
});
