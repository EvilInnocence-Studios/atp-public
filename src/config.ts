import { makeConfig } from "@core/lib/makeConfig";
import { localConfig } from "./config.local";

// Import the modules you want active here
import { module as commonModule } from "@common/index";
import { module as publicModule } from "@public/index";
import { module as storeModule } from "@store/index";
import { module as subscriptionsModule } from "@subscription/index";
import { module as subcriptionProductsPlugin} from "@subscription-products-plugin/index";
import { module as uacModule } from "@uac/index";
import { module as brokeredProductsPlugin} from "@brokered-products-plugin/index";

// List the modules you want active here
const modules = [
    publicModule,
    commonModule,
    uacModule,
    subscriptionsModule,
    subcriptionProductsPlugin,
    brokeredProductsPlugin,
    storeModule,
];

export const config = makeConfig(localConfig.api.baseUrl, modules, "public");
