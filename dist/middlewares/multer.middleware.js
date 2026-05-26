"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const appError_utils_1 = __importDefault(require("../utils/appError.utils"));
const multerUploader = () => {
    // !upload folder
    const uploadFolder = path_1.default.join(process.cwd(), "upload");
    const fileSize = 10 * 1024 * 1024;
    if (!fs_1.default.existsSync(uploadFolder)) {
        fs_1.default.mkdirSync(uploadFolder, { recursive: true });
    }
    // multer storage
    const storage = multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadFolder);
        },
        filename: function (req, file, cb) {
            const uniqueName = Date.now() + "-" + file.originalname.replace(/\s/g, "");
            cb(null, uniqueName);
        },
    });
    // ! file filter
    // image:png,jpg,jpeg,webp,svg, pdf,doc
    // virus.exe => file.png
    const fileFilter = (req, file, cb) => {
        const allowedExtentions = /png|jpg|jpeg|webp|pdf/;
        const allowedMimeType = [
            "image/png",
            "image/jng",
            "image/jpng",
            "image/webp",
            "application/pdf",
        ];
        const extName = allowedExtentions.test(path_1.default.extname(file.originalname).toLocaleLowerCase());
        const isAllowedMimeType = allowedMimeType.includes(file.mimetype);
        if (extName && isAllowedMimeType) {
            cb(null, true);
        }
        else {
            const error = new appError_utils_1.default(`Only image (png,jpg,jpeg,webp) and pdf are allowed`, 400);
            cb(error);
        }
    };
    const upload = (0, multer_1.default)({
        storage: storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: fileSize,
        },
    });
    return upload;
};
exports.multerUploader = multerUploader;
