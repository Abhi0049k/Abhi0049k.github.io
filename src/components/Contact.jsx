import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert } from '@material-tailwind/react';
const sid = import.meta.env.VITE_SERVICE_ID;
const tid = import.meta.env.VITE_TEMPLATE_ID;
const apiKey = import.meta.env.VITE_API_KEY;

const Contact = () => {

    const form = useRef();

    const [open, setOpen] = useState(false);
    const [wrong, setWrong] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(sid, tid, form.current, apiKey)
            .then((result) => {
                console.log('email sent: ', result);
                e.target.reset();
                setOpen(true);
            }, (error) => {
                setWrong(true);
                console.log(error.text);
            });
    }

    return (
        <>
            <div id="contact" className="flex flex-col md:flex-row pt-6 pb-8">
                <div className='lg:w-1/2 md:w-1/2 md:px-8 px-4'>
                    <h1 className='text-3xl font-semibold text-gray-800 mb-6 md:mb-8'>Contact Me</h1>
                    <p className='text-lg text-gray-600 mb-8'>
                        If you have any questions, comments, or business inquiries, I would love to hear from you! Please feel free to send me a message using the contact form, and I will get back to you as soon as possible. Thank you for your interest, and I look forward to connecting with you!
                    </p>
                    <div className='py-4 space-y-4'>
                        <p className='text-lg text-gray-700 flex items-center gap-2'>
                            <i className="fa-solid fa-location-dot text-[#6B99C3] text-xl"></i> Lucknow, Uttar Pradesh, India
                        </p>
                        <p className='text-lg text-gray-700 flex items-center gap-2'>
                            <i className="fa-solid fa-envelope-open-text text-[#6B99C3] text-xl"></i><a href="mailto:mangalamkumar2002@gmail.com" className="hover:underline">mangalamkumar2002@gmail.com</a>
                        </p>
                        <p className='text-lg text-gray-700 flex items-center gap-2'>
                            <i className="fa-solid fa-phone text-[#6B99C3] text-xl"></i><a href="tel:+91-9519196924" className="hover:underline">+91-951-919-6924</a>
                        </p>
                    </div>
                    <div className="social-icons mt-6">
                        <a href="https://www.linkedin.com/in/mangalam-kumar-3236b3249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BntjgWpOESHq0Kgdf%2BJFJew%3D%3D" id="contact-linkedin" className="text-[#6B99C3] hover:text-blue-600 hover:underline text-3xl mx-2 transition-colors duration-300">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Abhi0049k" id="contact-github" className="text-[#6B99C3] hover:text-blue-600 hover:underline text-3xl mx-2 transition-colors duration-300">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 md:px-8 px-4 py-8 md:py-0">
                    <form onSubmit={sendEmail} ref={form}>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send me a message</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg text-gray-800 mb-2">Your Name</label>
                            <input type="text" id="name" name="user_name" className="w-full px-4 py-2 border border-[#6B99C3] rounded-md focus:ring focus:ring-[#6B99C3] focus:border-[#6B99C3] bg-gray-100" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg text-gray-800 mb-2">Your Email</label>
                            <input type="email" id="email" name="user_email" className="w-full px-4 py-2 border border-[#6B99C3] rounded-md focus:ring focus:ring-[#6B99C3] focus:border-[#6B99C3] bg-gray-100" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-lg text-gray-800 mb-2">Your Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-[#6B99C3] rounded-md focus:ring focus:ring-[#6B99C3] focus:border-[#6B99C3] bg-gray-100" required></textarea>
                        </div>
                        <div>
                            <button type="submit" className="bg-[#6B99C3] hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-md transition-colors duration-300">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <Alert
            className='mx-auto lg:w-2/4 fixed w-4/5 top-14 z-20 lg:left-1/4 left-10'
                color='green'
                open={open}
                onClose={() => setOpen(false)}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
            >
                Message sent successfully.
            </Alert>
            <Alert
            className='mx-auto lg:w-2/4 fixed w-4/5 top-14 z-20 lg:left-1/4 left-10'
                color='red'
                open={wrong}
                onClose={() => setWrong(false)}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
            >
                Something went wrong while sending the message.
            </Alert>
        </>
    );
};

export default Contact;
