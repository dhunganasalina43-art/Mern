"use strict";
// product.controller.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewArrivals = exports.getFeaturedProducts = exports.getProductsByCategory = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
//* get all products
const getAllProducts = async (req, res, next) => {
    try {
        const products = await product_model_1.default.find();
        res.status(200).json({
            success: true,
            message: "All products fetched successfully",
            data: products,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllProducts = getAllProducts;
//* get product by id
const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await product_model_1.default.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getProductById = getProductById;
//* create product
const createProduct = async (req, res, next) => {
    try {
        const product = await product_model_1.default.create(req.body);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createProduct = createProduct;
//* update product
const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedProduct = await product_model_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateProduct = updateProduct;
//* remove product
const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct = await product_model_1.default.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteProduct = deleteProduct;
//* get products by category
const getProductsByCategory = async (req, res, next) => {
    try {
        const { category } = req.params;
        const products = await product_model_1.default.find({ category });
        res.status(200).json({
            success: true,
            message: "Products by category fetched successfully",
            data: products,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getProductsByCategory = getProductsByCategory;
//* get featured products
const getFeaturedProducts = async (req, res, next) => {
    try {
        const products = await product_model_1.default.find({ featured: true });
        res.status(200).json({
            success: true,
            message: "Featured products fetched successfully",
            data: products,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getFeaturedProducts = getFeaturedProducts;
//* get new arrivals
const getNewArrivals = async (req, res, next) => {
    try {
        const products = await product_model_1.default.find()
            .sort({ createdAt: -1 })
            .limit(10);
        res.status(200).json({
            success: true,
            message: "New arrivals fetched successfully",
            data: products,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getNewArrivals = getNewArrivals;
