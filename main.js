function primary() {
    // variable declaration
    const ticketPrice = 250;
    const adminFee = 50;
    let uQty = Number(document.getElementById("uQty").value);
    let total = 0;
    let subtotal = 0;

    // logic to stop negative numbers
    if (uQty < 0) {
        uQty = 0;
        document.getElementById("uQty").value = 0;
    }

    // basic math
    subtotal = uQty * ticketPrice;

    // if-else to handle the total calculation
    if (uQty > 0) {
        total = subtotal + adminFee;
    } else {
        total = 0;
    }

    // display answer
    document.getElementById("resSub").innerHTML = "₱" + subtotal + ".00";
    document.getElementById("resTotal").innerHTML = "₱" + total + ".00";
}

function resetall() {
    // clears the inputs and reset totals to zero
    document.getElementById("uName").value = "";
    document.getElementById("uQty").value = 0;
    document.getElementById("resSub").innerHTML = "₱0.00";
    document.getElementById("resTotal").innerHTML = "₱0.00";
}