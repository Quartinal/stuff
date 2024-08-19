/**
 * @param {import('express').Request} req
 * @param {import('ws').Socket} socket
 * @param {import('ws').Head} head
 */
function handleUpgrade(req, socket, head) {
    if (req.url && req.url.endsWith('/something/')) {
        something.upgrade(req, socket, head);
    } else {
        socket.end();
    }
};