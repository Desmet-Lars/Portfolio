import {useState} from 'react';
import Contact from './contactcss'; // Adjust the import path

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        window.location.href = `mailto:desmetlars5@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;
    };

    return (
        <Contact id="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </Contact>
    );
};

export default ContactForm;