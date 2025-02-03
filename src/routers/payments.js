import { Router } from 'express';
import PaymentsCtrl from '../controllers/payments.js';

const router = Router();

router.get('/credit', PaymentsCtrl.generatePaymentCC);
router.get('/pix', PaymentsCtrl.generatePaymentPix);

export default router;
