"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const canteen_controller_1 = require("../controllers/canteen.controller");
const router = express_1.default.Router();
// Create a new canteen
router.post('/', canteen_controller_1.createCanteen);
// Get all canteens
router.get('/', canteen_controller_1.getAllCanteens);
// Get canteen by ID
router.get('/:id', canteen_controller_1.getCanteenById);
// Update canteen by ID
router.put('/:id', canteen_controller_1.updateCanteen);
// Delete canteen by ID
router.delete('/:id', canteen_controller_1.deleteCanteen);
exports.default = router;
