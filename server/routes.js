import { Router } from 'express';

const router = Router();

// Test Route
router.get('/api/test', (req, res) => {
    return res.status(200).json({ message: 'WORKING' });
});

export default router;
