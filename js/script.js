//  seat selected section  scroll up 
document.addEventListener("DOMContentLoaded", function() {
    const buyTicketBtn = document.querySelector("#buyTicketBtn");
    const ticketBook = document.querySelector('#ticketBooking');
    buyTicketBtn.addEventListener('click', function () {
        const showTicketBook = ticketBook.clientHeight;
        window.scrollTo({
            top: showTicketBook,
            behavior: "smooth"
        });
    }); 
});
// Select allSeat  to add funtionality  
const allSeat = document.getElementsByClassName('seats');
let count = 40; 
let booking = 0;
for (const seat of allSeat) {
    seat.addEventListener("click", function (e) {
        count = count - 1;
        document.getElementById('seatLeft').innerText = count;

        const seatName = e.target.parentNode.childNodes[1].innerText;
        const selectSeat = seat.innerText;
        const showSeat = document.getElementById('selectedSeat');

        const div = document.createElement("div");
        div.innerHTML = ` <div class="flex items-center justify-between px-4">
                                    <p>${selectSeat}</p>
                                    <p>Economic</p>
                                    <p>550</p>
                                </div>` 
        showSeat.appendChild(div)
        const price = document.getElementById('bookingSeat');
        const bookAmount = booking += 1;
        price.innerText = bookAmount; 
        console.log(bookAmount);
        
        // Total ticket Price 
        const multiplePrice = bookAmount * 550;
        const totalPrice = document.getElementById('totalPrice').innerText= multiplePrice

        console.log(totalPrice);
    })
}

function ticketPrice() {
    const price = document.getElementById('ticketPrice')
}