import express from 'express';
import { createCanteen, getAllCanteens, getCanteenById, updateCanteen, deleteCanteen } from '../controllers/canteen.controller';

const router = express.Router();

// Create a new canteen
router.post('/', createCanteen);

// Get all canteens
router.get('/', getAllCanteens);

// Get canteen by ID
router.get('/:id', getCanteenById);

// Update canteen by ID
router.put('/:id', updateCanteen);

// Delete canteen by ID
router.delete('/:id', deleteCanteen);

export default router;
