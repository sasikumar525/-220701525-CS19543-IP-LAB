document.getElementById('shipmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const shipmentID = document.getElementById('shipmentID').value;
    const recipientName = document.getElementById('recipientName').value;
    const address = document.getElementById('address').value;

    const shipment = {
        id: shipmentID,
        name: recipientName,
        address: address
    };

    addShipmentToList(shipment);
    this.reset();
});

function addShipmentToList(shipment) {
    const shipmentsList = document.getElementById('shipmentsList');
    const li = document.createElement('li');
    li.textContent = `ID: ${shipment.id}, Name: ${shipment.name}, Address: ${shipment.address}`;
    shipmentsList.appendChild(li);
}
