import { Slide } from 'react-awesome-reveal';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7sr2rr7', 'template_rssek01', form.current, 'VYPDX2N0B3cnkgwSS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        form.current.reset();
    };

    return (
        <div className="px-10 md:px-20 py-20" id='contact'>
            <Slide direction='left'>
                <h1 className='text-5xl font-bold'>
                    <span className='border-b-4 bottom-4 border-blue-400'>Contact</span>
                </h1>
            </Slide>
            <br />
            <Slide>
                <p className="text-2xl font-bold">Lets talk about everything!</p>
            </Slide>
            <br />
            <div className="md:flex space-y-4 md:space-y-0 items-center">
                <div className="md:w-1/2 space-y-4">
                    {/* Location */}
                    <div className="flex items-center">
                        <div>
                            <MdLocationPin className='text-6xl text-blue-400 mr-4' />
                        </div>
                        <div className='text-xl'>
                            <p className='font-bold'>Location</p>
                            <p className='opacity-90'>Frankfurt, Germany</p>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-center">
                        <div>
                            <MdEmail className='text-7xl text-blue-400 mr-1' />
                        </div>
                        <div className='text-xl'>
                            <p className='font-bold'>Mail</p>
                            <p className='opacity-90'>sohel.cse37@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className="md:w-1/2">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='from_name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='from_email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type='text' name='message' placeholder="Message" className="textarea textarea-bordered" required></textarea>
                        </div>

                        <div className="form-control mt-4">
                            <input type="submit" className="btn bg-blue-400 border-none hover:bg-blue-500" value="Send" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;