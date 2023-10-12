

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert("Congrations!!You are 'WISE'r with our app newsletter.");
  })
}

const cards = document.querySelectorAll('.stat');
        let maxHeight = 0;

        cards.forEach(card => {
            const cardHeight = card.offsetHeight;
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
        });

        cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });