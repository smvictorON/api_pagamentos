import { MercadoPagoConfig, Preference } from 'mercadopago';

export default class PaymentsCtrl {
  static async generatePayment(req, res) {
    console.log("🚀 ~ process.env.MERCADO_PAGO_ACCESS_TOKEN:", process.env.MERCADO_PAGO_ACCESS_TOKEN)
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
      console.log("🚀 ~ PaymentsCtrl ~ generatePayment ~ res:", res)
      const {init_point, sandbox_init_point} = res
      console.log("🚀 ~ PaymentsCtrl ~ generatePayment ~ init_point:", init_point)
      console.log("🚀 ~ PaymentsCtrl ~ generatePayment ~ sandbox_init_point:", sandbox_init_point)
    }catch(err){
      console.log("🚀 ~ PaymentsCtrl ~ generatePayment ~ err:", err)

    }

    return res.status(200).json({
      message: "ok"
    })
  }
}
