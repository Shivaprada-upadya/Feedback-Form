import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        emailId: "",
        feedback: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/feedback/submit", formData);
            alert("Feedback submitted successfully!");
            setFormData({ name: "", phoneNumber: "", emailId: "", feedback: "" });
        } catch (error) {
            alert("Error submitting feedback");
        }
    };     */


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Sending Data to Backend:", formData);  // Debugging log
    
        try {
            const response = await axios.post("http://localhost:8080/api/feedback/submit", formData);
            
            if (response.status === 200) {
                alert("Feedback submitted successfully!");
                setFormData({ name: "", phoneNumber: "", emailId: "", feedback: "" });
            } else {
                alert("Error submitting feedback");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to submit feedback");
        }
    };
    
    
    





/*
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("http://localhost:8080/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, message })  // Adjust field names
        });
    
        if (response.ok) {
            alert("Feedback submitted!");
        } else {
            alert("Error submitting feedback");
        }
    };  */
    



   




    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit} style={{ width: "300px", margin: "auto" }}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required />
                </div>
                <div>
                    <label>Feedback:</label>
                    <textarea name="feedback" value={formData.feedback} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
