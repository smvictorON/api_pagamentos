import { Router } from 'express';
import PaymentsCtrl from '../controllers/payments.js';

const router = Router();

router.get('/', PaymentsCtrl.generatePayment);

export default router;
