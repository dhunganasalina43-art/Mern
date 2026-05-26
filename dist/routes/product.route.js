"use strict";
// product.route.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.default.Router();
//* get all products
router.get("/", product_controller_1.getAllProducts);
//* get featured products
router.get("/featured", product_controller_1.getFeaturedProducts);
//* get new arrivals
router.get("/new-arrivals", product_controller_1.getNewArrivals);
//* get products by category
router.get("/category/:category", product_controller_1.getProductsByCategory);
//* get product by id
router.get("/:id", product_controller_1.getProductById);
//* create product
router.post("/", product_controller_1.createProduct);
//* update product
router.patch("/:id", product_controller_1.updateProduct);
//* delete product
router.delete("/:id", product_controller_1.deleteProduct);
exports.default = router;
