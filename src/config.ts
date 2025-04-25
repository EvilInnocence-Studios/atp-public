import { IApiConfig } from "@core/lib/types";
import { publicRoutes } from "@public/routes";
import { localConfig } from "./config.local";
import { storeRoutes } from "./store/lib/routes";
import {uacRoutes} from "@uac/lib/routes";

export const config = ():IApiConfig => ({
    api: {
        baseUrl: localConfig.api.baseUrl,
    },
    modules: [
        "uac", "common", "admin"
    ],
    menus: [
    ],
    paypal: {
        plans: localConfig.paypal.plans,
    },
    routes: [
        ...publicRoutes.public,
        ...storeRoutes.public,
        ...uacRoutes.public,
    ],
    settings: {}
});