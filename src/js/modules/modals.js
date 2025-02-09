const modals = () => {
    //connect modal with trigger
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        //open modal
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                //check if trigger not button
                if(e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                //prevent scroll page when modal open
               //document.body.style.overflow = "hidden";
               document.body.classList.add('modal-open');
            });
    
        });
        
        //close modal
        close.addEventListener('click', () => {
            modal.style.display = "none";
            //document.body.style.overflow = "";
            document.body.classList.remove('modal-open');
        });

        //close modal if click outside
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = "none";
                //document.body.style.overflow = "";
                document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = "block";
            document.body.classList.add('modal-open');
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

export default modals;