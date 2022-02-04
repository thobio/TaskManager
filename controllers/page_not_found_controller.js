const pageNotFoundController = (req, res) => {
    res.status(404).json([{ status: 404, message: 'page not found' }]);
}

module.exports = { pageNotFoundController }