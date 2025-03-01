const spRouter = {
    switchobj: null,
    pages: {},
    content: {},
    currentPage: null
};

function spElement(HTMLElement) {
    spRouter.switchobj = HTMLElement;
}

function spDeclareViews(views) {
    spRouter.pages = views;
}

function spFetchAll() {
    const fetchPromises = Object.entries(spRouter.pages).map(([id, url]) =>
        fetch(url)
            .then(res => res.ok ? res.text() : Promise.reject(`Error ${res.status}`))
            .then(data => spRouter.content[id] = data)
            .catch(err => console.error(`Failed to load ${id}:`, err))
    );

    return Promise.all(fetchPromises);
}

function spSwitch(reqpage) {
    if (!(reqpage in spRouter.content)) {
        console.error(`[Sponge]: Page '${reqpage}' does not have loaded content. Interrupting switch.`);
        return;
    }

    if (spRouter.currentPage) {
        spRouter.content[spRouter.currentPage] = spRouter.switchobj.innerHTML;
    }

    spRouter.currentPage = reqpage;
    spRouter.switchobj.innerHTML = spRouter.content[reqpage];
}
