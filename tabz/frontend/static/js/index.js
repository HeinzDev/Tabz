import Tabz from "./views/Tabz.js";
import Create from "./views/Create.js";
import Favorites from "./views/Favorites.js";
import Saved from "./views/Saved.js";
import SavedView from "./views/SavedView.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async ()=>{
    const routes = [
        {path: "/", view: Tabz},
        {path: "/create", view: Create},
        {path: "/favorites", view: Favorites},
        {path: "/saved", view: Saved},
        {path: "/saved/:id", view: SavedView}
    ];

    //Teste de rotas para matchs
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();
    if (typeof view.load === "function") {
        await view.load();
      }
};
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});