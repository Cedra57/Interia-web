
'use client';

import Image from 'next/image';
import styles from './styles.module.css'
import { useState } from 'react'

const Form = () => {

        const [form, setForm] = useState({
            email: '',
            number: '',
            name: '',
            message: '',
        })

        const [errors, setErrors] = useState({})
        const [touched, setTouched] = useState({})
        const [status, setStatus] = useState (null)

        const validateField = (name, value) => {
            switch (name) {

                case "email":
                    if (!value) return "Email обязателен"
                    if (!/\S+@\S+\.\S+/.test(value)) return "Неверный формат email"
                    return ""

                case "number":
                    const cleaned = value.replace(/\D/g, "")
                    if (!cleaned) return "Телефон обязателен"
                    if (cleaned.length < 10) return "Минимум 10 цифр"
                    return ""

                case "name":
                    if (!value) return "Имя обязательно"
                    if (value.length < 2) return "Минимум 2 символа"
                    return ""

                case "message":
                    if (!value) return "Сообщение обязательно"
                    if (value.length < 10) return "Минимум 10 символов"
                    return ""

                default:
                    return ""
            }
        }

        const handleChange = (e) => {
            const { name, value } = e.target

            setForm( prev => ({
            ...prev,
            [name]: value
            }));
        

            if (touched[name]) {
                setErrors(prev => ({
                    ...prev,
                    [name]: validateField(name, value),
                }))
                }
        };

        const handleBlur = (e) => {
            const { name, value } = e.target

            setTouched(prev => ({
            ...prev,
            [name]: true,
            }))

            setErrors(prev => ({
            ...prev,
            [name]: validateField(name, value),
            }))
        }


        const handleSubmit = async (e) => {
            e.preventDefault();

            const newErrors = {}

            Object.keys(form).forEach(field => {
                const error = validateField(field, form[field])
                if (error) newErrors[field] = error
            })

            setErrors(newErrors)
            setTouched({
                email: true,
                number: true,
                name: true,
                message: true,
            })

            if (Object.keys(newErrors).length > 0) return

            setStatus("Отправка...")

            try {
                const res = await fetch('/api/feedback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                })
                

                if (res.ok) {
                    setStatus('Ваша заявка успешно отправлена')
                    setForm({  email: '', number: '', name: '', message: '' })
                    setErrors({})
                    setTouched({})
                } else {
                    const data = await res.json()
                    setStatus(data.error || 'Error sending message')
                }
            } catch {
                setStatus('Server error')
            }
        }


        return (
        <section id='feedback' className='relative w-full h-[900px]'>

            <Image 
                src='/img/form-bg.jpg'
                alt="form-bg"
                fill
                priority
                className={`${styles.image_mask} object-cover -z-10`}
            />

            <div className='container'>
                <h1 className={styles.form__header}>Давайте обсудим ваш дизайн-проект</h1>
                <div className={styles.form__info}>
                    <div className={styles.form__contacts}>
                                <h1>Наши контакты</h1>
                                <div className='flex flex-col h-[250px] justify-evenly !ml-[20px]'>
                                    <div >
                                        <p>Адрес:</p>
                                        <p>Россия, Приморский край, Находка, ул.Луначарского, 1А</p>
                                    </div>
                                    <div >
                                        <p>Связь:</p>
                                        <p>+7 (4236) 271-25-99</p>
                                        <p>Пн-Пт 10:00-19:00</p>
                                    </div>
                                </div>
                                
                        
                    </div>
                    <form className={styles.form__submit} onSubmit={handleSubmit}>

                        <div className={styles.form__input_container}>

                            <input 
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Email'
                                
                            />
                            {touched.email && errors.email && (
                                <p className={styles.errorMessage}>{errors.email}</p>
                            )}
                        </div>
                        <div className={styles.form__input_container}>

                            <input
                                type='tel'
                                name='number'
                                value={form.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Телефон'
                            />
                            {touched.number && errors.number && (
                                <p className={styles.errorMessage}>{errors.number}</p>
                            )}

                        </div>
                        <div className={styles.form__input_container}>

                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Ваше имя'
                            />
                            {touched.number && errors.number && (
                                <p className={styles.errorMessage}>{errors.number}</p>
                            )}

                        </div>
                        <div className={styles.form__textarea_container}>

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Сообщение'
                                rows={4}
                                className='w-[420px] outline-none'
                            />
                            {touched.name && errors.name && (
                                <p className={styles.errorMessage}>{errors.name}</p>
                            )}
                        </div>
                        
                        <button className={styles.form__btn} type='submit'>Отправить</button>
                        {status && <p>{status}</p>}
                        
                    </form>
                    
                </div>
            </div>
        </section>
    )

    
}
export default Form;