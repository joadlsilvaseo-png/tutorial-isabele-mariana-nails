"use strict";

/* Instalação somente em HTTPS/localhost. Sem APIs ou informações pessoais. */
if ("serviceWorker" in navigator &&
    (location.protocol === "https:" ||
     ["localhost", "127.0.0.1"].includes(location.hostname))) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js", { scope: "./" })
      .catch((error) => console.warn("[Guia PWA] Registro indisponível:", error));
  });
}
