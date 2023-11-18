
    // Select all elements with the class 'board-add-card'
    let addCardButtons = document.querySelectorAll(".board-add-card");


// Function to add Cards 
function createCard(cardTitle) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("draggable", true);
    card.innerHTML = `
      <div class="card-head">
        <div class="cardlabels"><label style="background-color:violet; color: white;">Database</label></div>
        <div class="card-options-container">
          <div class="card-options"><i class="fa-solid fa-xmark"></i></div>
        </div>
      </div>
      <div class="card-title" contenteditable="true">${cardTitle}</div>
      <div>
        <p><i class="fa-solid fa-bars-staggered"></i></p>
      </div>
      <div class="card-footer">
        <p class="card-footer-item"><i class="fa-regular fa-square-check"></i> 0/1</p>
      </div>
    `;
    return card;
}



// Function to show popup

function showPopup(card) {
    // Get the values from the clicked card
    const cardTitle = card.querySelector(".card-title").innerText;
    const cardDescription = card.querySelector(".desc").innerText;
    const cardDate = card.querySelector(".dateCard").innerText;
  
    // Set the values in the popup
    document.querySelector(".new-input-title p").innerText = cardTitle;
    document.querySelector(".new-input-desc p.display").innerText = cardDescription;
  
    // Show the popup
    const popup = document.querySelector(".modal");
    popup.style.display = "flex";

    
    popup.addEventListener("click", (e)=>{
        if(e.target.classList.contains("close")){
            popup.style.display = "none";
            updateCardDetails(card, popup);
        }
})
  }




//   Function to update card details from popup99
function updateCardDetails(card, popup) {
    // Update title
    card.querySelector(".card-title").innerText = popup.querySelector(".new-input-title").innerText;
  
    // Update description
    card.querySelector(".desc").innerText = popup.querySelector(".new-input-desc p.display").innerText;
  
    // Update date
    card.querySelector(".dateCard").innerText = popup.querySelector(".popupDate").value;
  }




document.addEventListener("DOMContentLoaded", function () {

/*===================== Add New Boards ======================== */

//   To add new boards
const addBoardButton = document.querySelector(".add-board");
const boardContainer = document.querySelector(".boards");

addBoardButton.addEventListener("click", showAddBoardForm);

function showAddBoardForm() {
  addBoardButton.classList.toggle("hidden");
  // Create a new container for the form

  const formContainer = document.createElement("div");
  formContainer.classList.add("custom-input-edit");

  // Create an input area
  const inputArea = document.createElement("input");
  inputArea.classList.add("board-input");
  inputArea.placeholder = "Board Title";

  // Create an "Add" button
  const addButton = document.createElement("button");
  addButton.classList.add("display", "add-board-in-card");
  addButton.innerHTML = "Add Board";
  addButton.addEventListener("click", createNewCard);

  // Create a "Close" button with an icon
  const closeFormButton = document.createElement("button");
  closeFormButton.classList.add("display", "close-board-form");
  closeFormButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  closeFormButton.addEventListener("click", () => {
    boardContainer.removeChild(formContainer);
    addBoardButton.classList.remove("hidden");
  });

  // Append elements to the form container
  formContainer.appendChild(inputArea);
  formContainer.appendChild(addButton);
  formContainer.appendChild(closeFormButton);

  // Append the form container to the board container
  boardContainer.insertBefore(formContainer, addBoardButton.parentElement.parentElement);

  // Hide the "Add Board" button
  addBoardButton.classList.add("hidden");
}

function createNewCard() {
  const formContainer = document.querySelector(".custom-input-edit");
  const inputArea = formContainer.querySelector(".board-input");
  const boardTitle = inputArea.value.trim();

  if (boardTitle !== "") {
    const newCard = document.createElement("div");
    newCard.classList.add("board");

    const innerBoard = document.createElement("div");
    innerBoard.classList.add("inner-board");

    const header = document.createElement("div");
    header.classList.add("header");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = boardTitle;

    const options = document.createElement("div");
    options.classList.add("options");

    const addCardButton = document.createElement("p");
    addCardButton.classList.add("display", "board-add-card");
    addCardButton.innerHTML = "+ Add Card";

    const closeBoardButton = document.createElement("p");
    closeBoardButton.classList.add("display", "close-board");
    closeBoardButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeBoardButton.addEventListener("click", () => {
      boardContainer.removeChild(newCard);
    });

    options.appendChild(addCardButton);
    options.appendChild(closeBoardButton);

    header.appendChild(title);
    header.appendChild(options);

    innerBoard.appendChild(header);

    const appCards = document.createElement("div");
    appCards.classList.add("appCards", "custom-scroll");

    const customInput = document.createElement("div");
    customInput.classList.add("custom-input");

    const addBoardCardButton = document.createElement("p");
    addBoardCardButton.classList.add("display", "board-add-card");
    addBoardCardButton.innerHTML = "+ Add Card";

    customInput.appendChild(addBoardCardButton);

    appCards.appendChild(customInput);

    innerBoard.appendChild(appCards);

    newCard.appendChild(innerBoard);

    newCard.innerHTML = `<div class="inner-board">
                  <div class="header">
                      <p class="title" contentEditable="true">${boardTitle}<span>1</span></p>
                      <div class="options"><i class="fa-solid fa-ellipsis"></i></div>
                  </div>
                  <div class="appCards custom-scroll">
                      <div class="card" draggable="true">
                          <div class="card-head">
                              <div class="cardlabels"><label
                                      style="background-color:violet; color: white;">Database</label>
                              </div>
                              <div class="card-options"><i class="fa-solid fa-ellipsis"></i></div>
                          </div>
                          <div class="card-title" contenteditable="true">Task</div>
                          <div>
                              <p><i class="fa-solid fa-bars-staggered"></i></p>
                          </div>
                          <div class="card-footer">
                              <p class="card-footer-item"><i class="fa-regular fa-square-check"></i> 0/1</p>
                          </div>
                      </div>
                      <div class="custom-input">
                          <p class="display board-add-card">+ Add Card</p>
                      </div>
                  </div>
              </div>`;

    boardContainer.insertBefore(
      newCard,
      document.querySelector(".new-board")
    );

    // Clear the form and show the "Add Board" button
    boardContainer.removeChild(formContainer);
    addBoardButton.classList.remove("hidden");
  }

  addCardButtons = document.querySelectorAll(".board-add-card");
}


/*====================== Add New Cards ======================== */

document.addEventListener("click", function (e) {
    // Check if the clicked element has the class 'board-add-card'
    if (e.target.classList.contains("board-add-card")) {
        handleAddCardClick(e.target);
    }
});

function handleAddCardClick(addCardButton) {
    // Your existing logic for handling the 'Add Card' button click
    addCardButton.style.display = "none";

    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("placeholder", "Enter card name");

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.addEventListener("click", function () {
        const cardContainer = addCardButton
            .closest(".inner-board")
            .querySelector(".appCards");
        const newCard = createCard(inputElement.value);
        cardContainer.insertBefore(newCard, addCardButton.parentElement);

        inputElement.value = "";
        hideNewElements();
    });

    const crossButton = document.createElement("button");
    crossButton.textContent = "✕";
    crossButton.addEventListener("click", function () {
        inputElement.value = "";
        hideNewElements();
    });

    const newElementsContainer = document.createElement("div");
    newElementsContainer.classList.add("custom-input-edit");
    newElementsContainer.appendChild(inputElement);
    newElementsContainer.appendChild(addButton);
    newElementsContainer.appendChild(crossButton);

    addCardButton.parentElement.appendChild(newElementsContainer);
}

    // Function to hide the new elements and show the 'add-card' button
    function hideNewElements() {
        addCardButtons.forEach((addCardButton) => {
            addCardButton.style.display = "block";
            const newElementsContainer =
                addCardButton.parentElement.querySelector(".custom-input-edit");
            if (newElementsContainer) {
                newElementsContainer.remove();
            }
        });
    }

    // Add click event listener to all 'card-options' icons
    const cardOptionsIcons = document.querySelectorAll(".card-options .fa-xmark");
    cardOptionsIcons.forEach((cardOptionsIcon) => {
        cardOptionsIcon.addEventListener("click", function () {
            // Delete the specific card
            const cardToDelete = cardOptionsIcon.closest(".card");
            cardToDelete.remove();
        });
    });

    // Add click event listener to all 'fa-xmark' icons in boards
    const boardDeleteIcons = document.querySelectorAll(".options .fa-xmark");
    boardDeleteIcons.forEach((deleteIcon) => {
        deleteIcon.addEventListener("click", function () {
            // Delete the specific board
            const boardToDelete = deleteIcon.closest(".board");
            boardToDelete.remove();
        });
    });

    /* ====================== Show PopUp ========================== */

  // Add click event listener to all cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // Display the popup with card data
      showPopup(e.target);
    });
  });
});

    /* ====================== Drag and Drop  ========================== */



    const cards = document.querySelectorAll('.card');
    const boards = document.querySelectorAll('.board');

    cards.forEach(card => {
        card.setAttribute('draggable', 'true');
        card.addEventListener('dragstart', handleDragStart);
    });

    boards.forEach(board => {
        board.addEventListener('dragover', allowDrop);
        board.addEventListener('drop', handleDrop);
    });

    let draggedCard = null;
    let originalParent = null;

    function allowDrop(event) {
        event.preventDefault();
    }

    function handleDragStart(event) {
        // Set the data to be transferred during the drag
        draggedCard = event.target;
        // Store the original parent of the dragged card
        originalParent = draggedCard.parentNode;
    }

    function handleDrop(event) {
        event.preventDefault();

        if (draggedCard) {
            // Create a copy of the dragged card
            const clonedCard = draggedCard.cloneNode(true);

            // Find the target card below which the dragged card should be appended
            const targetCard = event.target.closest('.card');

            // Find the target board to which the dragged card should be appended
            const targetBoard = event.target.closest('.board');

            if (targetCard) {
                // Append the cloned card below the target card
                targetCard.parentNode.insertBefore(clonedCard, targetCard.nextSibling);
            } else if (targetBoard) {
                // Append the cloned card to the target board
                targetBoard.querySelector('.appCards').appendChild(clonedCard);
            } else if (originalParent === event.target) {
                // Append the cloned card back to its original parent div
                originalParent.appendChild(clonedCard);
            }

            // Remove the original dragged card
            draggedCard.parentNode.removeChild(draggedCard);

            // Reset draggedCard and originalParent to null after the drop
            draggedCard = null;
            originalParent = null;
        }
    }