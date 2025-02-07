import { IApiConfig } from "@core/lib/types";
import { publicRoutes } from "@public/routes";
import { localConfig } from "./config.local";
import { storeRoutes } from "./store/lib/routes";
import {uacRoutes} from "@uac/lib/routes";

export const config = ():IApiConfig => ({
    appName: "EvilInnocence Store",
    api: {
        baseUrl: localConfig.api.baseUrl,
    },
    analytics: {
        google: "G-G7SVPC1M02",
    },
    gallery: {
        maxRowCount: 9999,
    },
    social: {
        twitter: "EvilInnocenceCG",
        blueSky: "evilinnocence.bsky.social",
        instagram: "evilinnocencecg",
    },
    modules: [
        "uac", "common", "admin"
    ],
    menus: [
    ],
    paypal: {
        clientId: localConfig.paypal.clientId,
        plans: localConfig.paypal.plans,
    },
    routes: [
        ...publicRoutes.public,
        ...storeRoutes.public,
        ...uacRoutes.public,
    ]
});