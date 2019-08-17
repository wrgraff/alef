let menuList = document.querySelector('#menu .nav'),
    content = document.querySelector('#content');
getContent('/content.json');

function getContent(url) {
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createMenu(json);
        addContent(json[0].content);
    });
};

function createMenu(json) {
    json.forEach((item, i) => {
        let menuItem = createMenuItem(item.title, item.address);
        if (i === 0) {
            menuItem.classList.add('active');
        };
        menuList.append(menuItem);

        menuItem.addEventListener('click', (e) => {
            e.preventDefault();
            addContent(item.content);
            removeItemClasses(menuList);
            menuItem.classList.add('active');
        });
    });
};

function createMenuItem(title, address) {
    let item = addElement('li', 'nav-item w-100'),
        link = addElement('a', 'nav-link text-truncate');
    link.href = address;
    link.textContent = title;
    item.append(link);

    return item;
};

function addContent(text) {
    content.innerHTML = text;
};

function removeItemClasses(menu) {
    let items = menu.querySelectorAll('li');
    items.forEach(item => {
        item.classList.remove('active');
    });
};
