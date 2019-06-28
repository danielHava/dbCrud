const Book = require('../db/models').Book;
const getParamsFromReq = require('../utils/helpers').getParamsFromReq;
const storeQueryResults = require('../utils/helpers').storeQueryResults;

const setFromRequestBody = (req) => ({...req.body });
const setWhereId = (req) => ({ where: { id: req.params.id } });

const BookController = {
  list: async (req, res, next) => {
    try {
      const query = {};
      // const query = getParamsFromReq(req);
      const items = await Book.findAll(query);
      storeQueryResults(req, items, 200);
      next();
    } catch(err) {
      next(err);
    }
  },
  find: async (req, res, next) => {
    try {
      const query = getParamsFromReq(req, [setWhereId]);
      const items = await Book.findOne(query);
      storeQueryResults(req, items, 201);
      next();
    } catch(err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const query = getParamsFromReq(req, [setFromRequestBody]);
      const items = await Book.create(query);
      storeQueryResults(req, items, 201);
      next();
    } catch(err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const query = getParamsFromReq(req, [setWhereId, setFromRequestBody]);
      const items = await Book.update(query);
      storeQueryResults(req, items, 201);
      next();
    } catch(err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const query = getParamsFromReq(req, [setWhereId]);
      const items = await Book.destroy(query);
      storeQueryResults(req, items, 201);
      next();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = BookController;
