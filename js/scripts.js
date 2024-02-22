
    const getAllSeats = document.getElementsByClassName('seats');

    for (const seat of getAllSeats) {
        seat.addEventListener('click', function (event) {
            const selectedSeatName = event.target.innerText

            const seatCount = getTargetedElement('booking-Seat');
            if (seatCount >= 4) {
                alert("You can not select more then four.");
                return;
            }
            event.target.classList.add("bg-emerald-600")

            const selectSeat = getTargetedElement('booking-Seat');
            document.getElementById('booking-Seat').innerText = selectSeat + 1;

            const totalSeat = getTargetedElement('seatLeft')
            document.getElementById("seatLeft").innerText = totalSeat - 1
        
            const seatLavel = 'Economic';
            const seatPrice = '550';

            const div = document.createElement('div');
            div.classList.add('flex')
            div.classList.add('justify-between')
            div.classList.add('px-4')

            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');

            p1.innerText = selectedSeatName;
            p2.innerText = seatLavel;
            p3.innerText = seatPrice;

            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            selectedSeat.appendChild(div);

            totalPrice()
            grandTotalPrice()
        })
    }

    // total discount function 
    function grandTotalPrice(status) {
        const updatTotalCost = getTargetedElement('total-Price');
        const couponCode = document.getElementById('couponCode').value;
    

    
        if (couponCode == 'NEW15') {
            const new15Price = updatTotalCost * .15;
            document.getElementById('grand-Total-Price').innerText = updatTotalCost - new15Price;
            document.getElementById('couponCode').value = ''
        } else if (couponCode == 'Couple 20') {
            const couple20Price = updatTotalCost * .20;
            document.getElementById('grand-Total-Price').innerText = updatTotalCost - couple20Price;
            document.getElementById('couponCode').value = ''
        } else {
            document.getElementById('couponCode').value = ''
            document.getElementById('grand-Total-Price').innerText = updatTotalCost;
        
        }
    
    }

// total Price function 
function totalPrice() {
    const selectSeat = getTargetedElement('booking-Seat');
    const totalSeatCost =  selectSeat * 550;
    document.getElementById('total-Price').innerText = totalSeatCost;
}
// get common element function 
function getTargetedElement(id) {
    const targetedElement = document.getElementById(id).innerText
    const targetdeValue = parseInt(targetedElement)
    return targetdeValue
}

const result = getTargetedElement('booking-Seat')
// console.log(result);
