
function updateTotal() {
    let total = 0;

    document.querySelectorAll('.product').forEach(product => {
        const price = parseFloat(product.querySelector('.product-price').innerText);
        const quantity = parseInt(product.querySelector('.quantity-input').value);
        const productTotal = price * quantity;
        product.querySelector('.total-price').innerText = productTotal.toFixed(2);
        total += productTotal;
    });

    document.getElementById('finalTotal').innerText = total.toFixed(2);
}

function checkout() {
    const finalTotal = parseFloat(document.getElementById('finalTotal').innerText);
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (finalTotal > 0 && paymentMethod != "")  {
        console.log(`Compra no valor total de R$${finalTotal.toFixed(2)} usando ${paymentMethod}`);
        alert('Compra realizada com sucesso!');
    } else {
        alert('Por favor, selecione produtos e forma de pagamento válidos.');
    }
}

// Chama updateTotal inicialmente para exibir o total correto ao carregar a página
updateTotal();
