        document.addEventListener('click', function(event) {
            if (!event.target.closest('Enter PPOPUP FORM WITH SELECTOR EG: .popup') && 'OVERLAY ELEMENT HERE'.style.display !== 'none') {
                'OVERLAY ELEMENT HERE'.style.display = 'none';
            }
        });