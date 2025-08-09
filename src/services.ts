import { brokerageServices } from "@brokered-products-plugin/lib/services";
import { commonServices } from "@common/lib/services";
import { IMethods } from "@core/lib/types";
import { storeServices } from "@store/services";
import { subscriptionServices } from "@subscription/lib/services";
import { uacServices } from "@uac/lib/services";

export const apiServices = (methods:IMethods) => ({
    ...commonServices(methods),
    ...uacServices(methods),
    ...storeServices(methods),
    ...subscriptionServices(methods),
    ...brokerageServices(methods),
});