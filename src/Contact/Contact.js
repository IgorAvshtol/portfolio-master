import style from './Contact.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Title from "../Common/component/title/Title";
import * as emailjs from "emailjs-com";


const SERVICE_ID = "service_k8s5o7y";
const TEMPLATE_ID = "template_4w6wnl1";
const USER_ID = "user_gkr0Re64D8G92AAJtTNIB";


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                alert("Thank you for message")
            }, (error) => {
                console.log(error.text);
            });
    }



    return (<div id="contacts" className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contact}`}>
                <Title title={"Contacts"}/>
                <form id="contact-form" className={style.formgroup} onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number"/>
                    <label>Name</label>
                    <input type="text" name="user_name"/>
                    <label>Email</label>
                    <input type="email" name="user_email"/>
                    <label>Message</label>
                    <textarea name="message" placeholder="Your message"/>
                    <button type="submit" className={style.submitBtn} value="Send">Send</button>
                </form>

            </div>
        </div>
    );
}

export default Contact;
