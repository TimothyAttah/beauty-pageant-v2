const paystack = (request) => {
  const MySecretKey = process.env.PAYSTACK_SECRET_KEY;

  const initializePayment = (form, mycallback) => {
    const options = {
      url: 'https://api.paystack.co/transaction/initialize',
      headers: {
        authorization:
          'Bearer sk_test_d02fdf49cc29ae9822e788484a0d36205c90d2f4',
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },
      form,
    };

    const callback = (error, response, body) => {
      return mycallback(error, body);
    };

    request.post(options, callback);
  };

  const verifyPayment = (ref, mycallback) => {
    const options = {
      url:
        'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
      headers: {
        authorization:
          'Bearer sk_test_d02fdf49cc29ae9822e788484a0d36205c90d2f4',
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },
    };
    const callback = (error, response, body) => {
      return mycallback(error, body);
    };
    request(options, callback);
  };
  return { initializePayment, verifyPayment };
};

export default paystack;
