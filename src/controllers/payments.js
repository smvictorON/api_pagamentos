import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';

export default class PaymentsCtrl {
  static async generatePaymentPix(req, res) {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
      options: {
        timeout: 5000,
      }
    });

    const payment = new Payment(client);

    const body = {
      transaction_amount: 0.79,
      description: "teste pix",
      payment_method_id: "pix",
      payer:{
        email: "victorsm9@hotmail.com"
      }
    };

    try{
      const res = await payment.create({ body })
      console.log("🚀 ~ PaymentsCtrl ~ generatePaymentPix ~ res:", res)
      const {point_of_interaction} = res
      console.log("🚀 ~ PaymentsCtrl ~ generatePaymentPix ~ ticket_url:", point_of_interaction.transaction_data.ticket_url)
    }catch(err){
      console.log("🚀 ~ PaymentsCtrl ~ generatePaymentPix ~ err:", err)
    }

    return res.status(200).json({
      message: "ok"
    })
  }

  static async generatePaymentCC(req, res) {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
      options: {
        timeout: 5000,
      }
    });

    const preference = new Preference(client);

    const body = {
      items: [
        {
          id: "1",
          title: "ProdTest",
          quantity: 1,
          currency_id: "BRL",
          unit_price: 0.99
        },
      ]
    };

    try{
      const res = await preference.create({ body })
      console.log("🚀 ~ PaymentsCtrl ~ generatePaymentCC ~ res:", res)
      const {init_point, sandbox_init_point} = res
      console.log("🚀 ~ PaymentsCtrl ~ generatePaymentCC ~ init_point:", init_point)
      console.log("🚀 ~ PaymentsCtrl ~ generatePaymentCC ~ sandbox_init_point:", sandbox_init_point)
    }catch(err){
      console.log("🚀 ~ PaymentsCtrl ~ generatePaymentCC ~ err:", err)

    }

    return res.status(200).json({
      message: "ok"
    })
  }
}
