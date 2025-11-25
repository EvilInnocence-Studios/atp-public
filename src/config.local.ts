export const localConfig = {
    api: {
        baseUrl: window.location.origin === "http://localhost:3000"
            ? "http://localhost:3002/"
            : "https://<lambda-url-goes-here>.lambda-url.us-east-1.on.aws/",
    }
};
