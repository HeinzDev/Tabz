import Tabz from "./views/Tabz.js";
import Create from "./views/Create.js";
import Favorites from "./views/Favorites.js";
import Saved from "./views/Saved.js";
import SavedView from "./views/SavedView.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  // Verificar se a solicitação é para a API
  if (location.pathname.startsWith("/api")) {
    const apiResponse = await handleApiRequest();
    if (apiResponse) {
      sendApiResponse(apiResponse);
    }
    return;
  }

  const routes = [
    { path: "/", view: Tabz },
    { path: "/create", view: Create },
    { path: "/favorites", view: Favorites },
    { path: "/saved", view: Saved },
    { path: "/saved/:id", view: SavedView },
  ];

  //Teste de rotas para matchs
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
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
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

const handleApiRequest = async () => {
  const apiRoutes = [
    { path: "/api/pastas", handler: handlePastasRequest },
    { path: "/api/pastas/:id", handler: handlePastasIdRequest },
    { path: "/api/pastas/:pastaId/textos", handler: handlePastasIdRequest },
    { path: "/api/favorites", handler: handlePastasIdRequest },
    { path: "/api/pastas/textos/", handler: handlePastasIdRequest },
    // Adicione outras rotas da API aqui
  ];

  // Encontrar a rota correspondente para a solicitação
  const match = apiRoutes.find((route) =>
    location.pathname.match(pathToRegex(route.path))
  );

  if (match) {
    // Chamar o handler (manipulador) correspondente para a rota
    const params = getParams(match);
    const responseData = await match.handler(params);
    return responseData;
  }

  // Se a rota da API não for encontrada, retornar null
  return null;
};

const sendApiResponse = (responseData) => {
  if (!responseData) {
    return;
  }

  const jsonResponse = JSON.stringify(responseData);

  const responseHeaders = {
    "Content-Type": "application/json",
  };

  const response = new Response(jsonResponse, {
    headers: responseHeaders,
  });

  // Enviar a resposta da API
  event.respondWith(response);
};

// Handlers (Manipuladores) para as rotas da API
const handlePastasRequest = async () => {
  try {
    const response = await fetch("/api/pastas");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Erro ao obter pastas da API");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const handlePastasIdRequest = async (params) => {
  try {
    const response = await fetch(`/api/pastas/${params.id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Erro ao obter a pasta com o ID ${params.id} da API`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Adicione outros handlers (manipuladores) de rota da API aqui
