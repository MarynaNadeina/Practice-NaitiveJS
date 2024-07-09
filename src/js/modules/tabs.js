const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    //hide all tab content
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        //remove active class
        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    }

    //show i tab content & add active class
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        //check if tab was clicked
        if(target && (target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if(target === item || target.parentNode === item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
    });
};

export default tabs;