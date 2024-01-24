import request from 'request';

const otpControllers = {
  sendOtp: async (req, res) => {
    const data = {
      api_key: 'TLB6anMweT3gqty1T9fwHI5wCN9HJHraZgr5glpqzGoOKdBXEpbe16PnNYjEi6',
      message_type: 'NUMERIC',
      to: '2348103194335',
      from: 'Approved Sender ID or Configuration ID',
      channel: 'dnd',
      pin_attempts: 10,
      pin_time_to_live: 5,
      pin_length: 6,
      pin_placeholder: '< 1234 >',
      message_text: 'Your pin is < 1234 >',
      pin_type: 'NUMERIC',
    };

    const options = {
      method: 'POST',
      url: 'https://api.ng.termii.com/api/sms/otp/send',
      headers: {
        'Content-Type': ['application/json', 'application/json'],
      },
      body: JSON.stringify(data),
    };

    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  },
};
