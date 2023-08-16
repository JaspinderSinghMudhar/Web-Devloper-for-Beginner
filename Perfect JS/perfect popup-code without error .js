        // Overlay BG ELEMENT
        var full_display_overlay_body = document.querySelector('.full_display_overlay_body');
        // Event to check where user clicked
        document.addEventListener('click', function handleClickOutsideBox(event) {
            // POPUP element selected
            const box = document.querySelector('.popup_form');
            // Check if Click element contains Popup element && if user click your CTA then dont pass it throgh 
            if (!box.contains(event.target) && !event.target.classList.contains('form_cta_js')){
                full_display_overlay_body.style.display = 'none';
            }else{
                full_display_overlay_body.style.display = 'flex';
            }
        });

        // Code to show Popup on CTA Click
        function popup_form_toggle(){
            full_display_overlay_body.style.display = 'flex';
        }