import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { PORT } from "./config";

const main = async () => {

  new Server({
    port:PORT,
    routes: AppRoutes.routes
  }).start();
};

(() => {
  main();
})();
