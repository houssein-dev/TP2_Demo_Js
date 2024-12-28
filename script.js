document.getElementById("calculateBtn").addEventListener("click", () => {
    const designation = document.getElementById("designation").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    const unitPrice = parseFloat(document.getElementById("unitPrice").value);
    const clientName = document.getElementById("clientName").value;
    const container=document.getElementsByClassName('container')

    if (!designation || isNaN(quantity) || isNaN(unitPrice) || !clientName) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
  
    const totalPrice = quantity * unitPrice;
    const discount = totalPrice * 0.15;
    const totalPriceAfterDiscount = totalPrice - discount;
  
    document.getElementById("totalPrice").value = `${totalPrice.toFixed(2)} MRU`;
    document.getElementById("totalPriceAfterDiscount").value = `${totalPriceAfterDiscount.toFixed(2)} MRU`;
    
    // container.classList.toggle('inverse')

    alert(`Bonjour ${clientName}, vous devez payer ${totalPriceAfterDiscount.toFixed(2)} MRU`);
  });

  