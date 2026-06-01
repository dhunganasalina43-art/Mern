"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const brand_model_1 = __importDefault(require("../models/brand.model"));
const catchAsync_utils_1 = require("../utils/catchAsync.utils");
const appError_utils_1 = __importDefault(require("../utils/appError.utils"));
const sendResponse_utils_1 = require("../utils/sendResponse.utils");
// get all
exports.getAll = (0, catchAsync_utils_1.catchAsync)(async (req, res) => {
    const brands = await brand_model_1.default.find();
    (0, sendResponse_utils_1.sendResponse)(res, {
        message: "All brands fetched",
        data: brands,
        statusCode: 200,
    });
});
// get by id
exports.getById = (0, catchAsync_utils_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const brand = await brand_model_1.default.findById(id);
    if (!brand) {
        throw new appError_utils_1.default(`brand ${id} not found`, 404);
    }
    (0, sendResponse_utils_1.sendResponse)(res, {
        message: `brand ${id} fetched`,
        data: brand,
        statusCode: 200,
    });
});
// create
exports.create = (0, catchAsync_utils_1.catchAsync)(async (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        throw new appError_utils_1.default("name is required", 400);
    }
    const brand = await brand_model_1.default.create({
        name,
        description,
    });
    (0, sendResponse_utils_1.sendResponse)(res, {
        message: "brand created",
        data: brand,
        statusCode: 201,
    });
});
// update
exports.update = (0, catchAsync_utils_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const brand = await brand_model_1.default.findById(id);
    if (!brand) {
        throw new appError_utils_1.default(`brand ${id} not found`, 404);
    }
    if (name)
        brand.name = name;
    if (description)
        brand.description = description;
    await brand.save();
    (0, sendResponse_utils_1.sendResponse)(res, {
        message: `brand ${id} updated`,
        data: brand,
        statusCode: 200,
    });
});
// delete
exports.remove = (0, catchAsync_utils_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const brand = await brand_model_1.default.findById(id);
    if (!brand) {
        throw new appError_utils_1.default(`brand ${id} not found`, 404);
    }
    await brand.deleteOne();
    (0, sendResponse_utils_1.sendResponse)(res, {
        message: `brand ${id} deleted`,
        data: brand,
        statusCode: 200,
    });
});
// export default catchAsync;
// export default AppError;
// export default sendResponse; 
