import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');

  // Handle OTP input
  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
  };

  return (
    <div>
      <h2>Enter Your OTP</h2>
      <OtpInput
        value={otp}
        onChange={handleOtpChange}
        numInputs={6} // Set the number of OTP digits
      />
      {/* <button onClick={handleVerification}>Verify</button> */}
    </div>
  );
};

export default VerifyOtpPage
