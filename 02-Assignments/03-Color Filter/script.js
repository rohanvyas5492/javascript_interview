// DUMMY DATA FOR THE COLORS
let ticketsArr = [
  {
    ticketTask: "This is task 1 (lightgreen)",
    ticketColor: "lightgreen",
    ticketID: "dGSUFjfiq",
  },
  {
    ticketTask: "This is task 2 (black)",
    ticketColor: "black",
    ticketID: "ay8dQS0o1",
  },
  {
    ticketTask: "This is task 3 (lightblue)",
    ticketColor: "lightblue",
    ticketID: "fOqBFgQtx",
  },
  {
    ticketTask: "This is task 4 (lightpink)",
    ticketColor: "lightpink",
    ticketID: "fOqBFgQtx",
  },
];

// CALLING createTicket() function for each value in ticketsArr
ticketsArr.forEach(function (ticket) {
  createTicket(ticket.ticketTask, ticket.ticketColor, ticket.ticketID);
});

// ADDING TICKET TO DOM
function createTicket(ticketTask, ticketColor, ticketID) {
  let id = ticketID || shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
       <div class="ticket-id">#${id}</div>
       <div class="task-area">${ticketTask}</div>
       <div class="ticket-lock">
         <button>Locked</button>
      </div>`;

  let mainCont = document.querySelector(".main-cont");
  mainCont.append(ticketCont);

  if (!ticketID) {
    ticketsArr.push({ ticketTask, ticketColor, ticketID: id });
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  }

}

//Accessing the toolbox colors

const toolBoxColors = document.querySelectorAll('.color');

function removeAllTickets(){
  let allTickets = document.querySelectorAll('.ticket-cont');
    allTickets.forEach((ticket)=>{
    ticket.remove();
  });
}

function addTicketsToDOM(tickets){
  tickets.forEach((ticket)=>{
    const {ticketTask,ticketColor,ticketID} = ticket;
    createTicket(ticketTask,ticketColor,ticketID);
  })
}

toolBoxColors.forEach((toolBoxColor)=>{
  toolBoxColor.addEventListener('click',()=>{
    let selectedToolBoxColor = toolBoxColor.classList[0];
    let filteredTickets = ticketsArr.filter((ticket)=>{
      return selectedToolBoxColor === ticket.ticketColor
    });
    removeAllTickets()
    addTicketsToDOM(filteredTickets)
  });

  toolBoxColor.addEventListener('dblclick',()=>{
    removeAllTickets()
    addTicketsToDOM(ticketsArr)
  });
});

//Locking and Unlocking task

// FETCHING ALL THE TICKET CONTAINERS IN AN ARRAY
let ticketContArr = document.querySelectorAll('.ticket-cont');

// TRAVERSING THROUGH THAT ARRAY
for (let i = 0; i < ticketContArr.length; i++) {
// ADDING CLICK EVENTLISTENER TO THE ICON
ticketContArr[i].querySelector('button').addEventListener('click', (e) => {
let ticket = ticketContArr[i];
let ticketTaskArea = ticket.querySelector('.task-area');
let buttonDiv = ticketContArr[i].children[3];
let button = buttonDiv.querySelector('button');

// CHANGING THE ICON, CLASS AND SETTING TEXT-ARE AS EDITABLE
if (buttonDiv.classList.contains('ticket-lock')) {
button.innerText = 'Unlocked';
buttonDiv.classList.remove('ticket-lock');
buttonDiv.classList.add('ticket-unlock');
ticketTaskArea.setAttribute('contenteditable', 'true');

} else {
button.innerText = 'Locked';
buttonDiv.classList.remove('ticket-unlock');
buttonDiv.classList.add('ticket-lock');
ticketTaskArea.setAttribute('contenteditable', 'false');
}


// UPDATING MAIN TICKET ARRAY
let id = ticket.querySelector('.ticket-id').innerText;
let ticketIdx = getTicketIdx(id);
ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
})
}

// FETCHING ALL THE TICKET CONTAINERS IN AN ARRAY
let removeBtn = document.querySelector('.remove-btn');

let removeFlag = false;

// REMOVE BUTTON HANDLES removeFlag and creates ALERT
removeBtn.addEventListener('click', function () {
removeFlag = !removeFlag;

if (removeFlag === true) {
alert('delete button has been activated');
removeBtn.style.backgroundColor = 'red';
} else {
removeBtn.style.backgroundColor = 'inherit';
}
});


// TRAVERSING THROUGH THAT ARRAY
for (let i = 0; i < ticketContArr.length; i++) {
// ADDING CLICK EVENTLISTENER TO THE ICON
ticketContArr[i].addEventListener('click', (e) => {
if (!removeFlag) return;

let idx = getTicketIdx(ticketContArr[i].querySelector('.ticket-id').innerText);

let deletedElement = ticketsArr.splice(idx, 1);

console.log(deletedElement)

ticketContArr[i].remove(); // ui Removal

})
}

// A FUNCTION TO GET THE TICKET INDEX FROM MAIN DATA ARRAY
function getTicketIdx(id) {
let ticketIdx = ticketsArr.findIndex(function (ticketObj) {
return ticketObj.ticketID === id;
})

return ticketIdx;
}
