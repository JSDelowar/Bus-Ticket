
document.addEventListener("DOMContentLoaded", function() {
    // Scroll up to the ticket booking section when the button is clicked
    const buyTicketBtn = document.querySelector("#buyTicketBtn");
    const ticketBook = document.querySelector('#ticketBooking');
    buyTicketBtn.addEventListener('click', function () {
        const showTicketBook = ticketBook.clientHeight;
        window.scrollTo({
            top: showTicketBook,
            behavior: "smooth"
        });
    });

    // Function to handle seat selection
    const allSeat = document.getElementsByClassName('seats');
    let count = 40;
    let booking = 0;
    for (const seat of allSeat) {
        seat.addEventListener("click", function (event) {
            count = count - 1;
            document.getElementById('seatLeft').innerText = count;

            const selectSeat = seat.innerText;
            const showSeat = document.getElementById('selectedSeat');

            const div = document.createElement("div");
            div.innerHTML = ` <div class="flex items-center justify-between px-4">
                                        <p>${selectSeat}</p>
                                        <p>Economic</p>
                                        <p>550</p>
                                    </div>`;
            showSeat.appendChild(div);

            // Apply background color to the selected seat
            if (seat.classList.contains('selected')) {
                seat.classList.add('bg-emerald-600');
            } else {
                seat.classList.add('bg-emerald-300');
            }

            const selectSingleSeat = document.getElementById('bookingSeat');
            const bookAmount = booking += 1;
            selectSingleSeat.innerText = bookAmount;

            if (bookAmount >= 4) {
                return alert("Booking limit exceeded (maximum 4 seats)");
            }

            // Total ticket Price
            const totalPrice = document.getElementById('totalPrice').innerText = bookAmount * 550;
            seat.classList.add('selected-seat');
            seat.classList.add('bg-emerald-300');
            return totalPrice;
        });
    }
});

// Function for applying discount based on coupon code
function grandTotal(event) {
    const couponInput = document.getElementById('couponCode').value;
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = parseFloat(totalPriceElement.innerText);
    const grandTotalElement = document.getElementById('grandTotalPrice');
    const applyBtn = document.getElementById('applyBtn');

    // Applying discount based on coupon code
    if (couponInput === 'NEW15') {
        const discountPrice = Math.round(0.15 * totalPrice);
        grandTotalElement.innerText = totalPrice - discountPrice;
        applyBtn.classList.add("hidden");
    } else if (couponInput === 'Couple 20') {
        const discountPrice = Math.round(0.20 * totalPrice);
        grandTotalElement.innerText = totalPrice - discountPrice;
        applyBtn.classList.add("hidden");
    } else {
        grandTotalElement.innerText = totalPrice;
    }
}






