import './contact.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react';
function Contacts(){
        const {t,i18n} = useTranslation()
    
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const TELEGRAM_BOT_TOKEN = "8497107813:AAFMOGxL1qzcWYVR2SAYjtXMINfqVh3XEbQ";
    const CHAT_ID = "7399221029";

    const handleSubmit = async (e) => {
e.preventDefault()

const fullMesage = `Xabar:\n\n😀Имя: ${name} 📩Эмаил: ${email} 📃Message: ${message}`

const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
const payload = {
    chat_id: CHAT_ID,
    text: fullMesage,
};
try{
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        toast.success('Message succesfully sent!')
        setName('');
        setEmail('');
    }else{
        toast.error('Error sending message!') 
    } 

}catch(error){
    toast.error("Xatolik yuz berdi!");
    console.error(error);
}
}
    return(
        <>
        <div className="contact">
            <div className="image">
                <h1>{t('want')}</h1>
            </div>
            <div className="inputs">
            <form onSubmit={handleSubmit} className="telegram-form">
            <input value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Name" required/>
<br />
<input type="text"
 value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Email"
required
/>
<input type="text" 
value={message}
onChange={(e) => setMessage(e.target.value)}
placeholder="Message" required/>
<br />
<button type="submit">{t('send')}</button>
        </form>
            </div>
        </div>
        </>
    )
}
export default Contacts