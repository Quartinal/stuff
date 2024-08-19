/**
 * @param {import('express').Request} req
 * @param {import('express').Request} res
 */
function handleRequest(req, res) {
    if (req.url && req.url.endsWith('/something/')) {
        something.request(req, res);
    } else {
        /**
         * @type {import('express').Express}
         */
        const app = express();

        app(req, res);
    }
};