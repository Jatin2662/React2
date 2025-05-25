

import react from "react";
import { useState } from "react";
import '../styles/Form.css';




function Form() {

    const [step, setStep] = useState(1);

    const [otp, setOtp] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        otp: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <section className="form-sec">
            <h1>Create Account</h1>
            {step === 1 && <Name_Email formData={formData} handleChange={handleChange} setStep={setStep} setOtp={setOtp} />}
            {step === 2 && <OTP formData={formData} handleChange={handleChange} setStep={setStep} setOtp={setOtp} otp={otp} setFormData={setFormData} />}
            {step === 3 && <Password formData={formData} handleChange={handleChange} setStep={setStep} setFormData={setFormData} />}
            {step === 4 && <Confirmation />}
        </section>
    );
}

function Name_Email({ formData, handleChange, setStep, otp, setOtp }) {
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                const generatedOtp = Math.floor(1000 + Math.random() * 9000);
                setOtp(generatedOtp);
                alert(`${generatedOtp} is your One Time Password.`);
                setStep(2);
            }}>
                <h1>LogIn</h1>
                <input
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="form-btn">Next</button>
            </form>
        </>
    );
}

function OTP({ formData, handleChange, setStep, otp, setOtp, setFormData }) {

    const RegenerateOtp = () => {
        const generatedOtp = Math.floor(1000 + Math.random() * 9000);
        setOtp(generatedOtp);
        alert(`${generatedOtp} is your One Time Password.`);
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (parseInt(formData.otp) !== otp) {
                    alert("Your OTP is incorrect...");
                    setFormData(prev => ({
                        ...prev,
                        otp: ""
                    }));
                    return;
                }
                setStep(3);
            }}>
                <h1>Verification</h1>
                <input
                    name="otp"
                    placeholder="Enter OTP"
                    type="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    required
                />
                <div className="form-btns">
                    <button className="form-btn" onClick={RegenerateOtp} >Resend OTP</button>
                    <button type="submit" className="form-btn" >Verify & Continue</button>
                </div>
            </form>
        </>
    );
}

function Password({ formData, handleChange, setStep, setFormData }) {

    const [passwordMessage, setPasswordMessage] = useState('');

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (formData.password !== formData.confirmPassword) {
                    setPasswordMessage("Password doesn't match, Please Check.");
                    setFormData(prev => ({
                        ...prev,
                        password: "",
                        confirmPassword: ""
                    }))
                    return;
                }
                setStep(4);
            }}>
                <h1>Set Password, Minimum 15 Characters</h1>
                <div className="password-message">{passwordMessage}</div>
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={15}
                    required
                />
                <input
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    minLength={15}
                    required
                />
                <button type="submit" className="form-btn" >Submit</button>
            </form>
        </>
    );
}

function Confirmation() {
    return (
        <div className="c-box">
            <h1>Account Created</h1>
            <button className="form-btn">LogIn</button>
        </div>
    );
}

export default Form;