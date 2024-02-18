
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

// document.addEventListener("click", function () {
//     const scrollToBottomButton = document.getElementById("buyTicketBtn");
//     const ticketBook = document.getElementById("ticketBooking");
//     scrollToBottomButton.addEventListener("click", function () { 
//         const contentHeight = ticketBook.clientHeight;
//         window.scrollTo({
//             top: contentHeight,
//             behavior: "smooth"
//         });
//     });
// });
