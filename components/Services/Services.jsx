
import styles from './styles.module.css';

const Services = () => {

    return (
        <section id='services' className={styles.services__section}>
            <div className="container">
                <div className={styles.services__header}>
                    <p>SERVICES</p>
                    <h1>Предоставляем полный пакет услуг</h1>
                </div>
                <div className={styles.services__list}>
                    <div className={styles.services__list_item1}>01</div>
                    <div className={styles.services__list_item2}> Дизайн-проект интерьера</div>
                    <div className={styles.services__list_item3}>Полный пакет документации: планировки, концепция, визуализации и рабочие чертежи для точной реализации проекта.</div>
                    
                
                    <div className={styles.services__list_item1}>02</div>
                    <div className={`${styles.services__list_item2}`}>3D-визуализация</div>
                    <div className={styles.services__list_item3}>Фотореалистичные изображения будущего интерьера, позволяющие увидеть результат ещё до начала работ.</div>
                    
            
                    <div className={styles.services__list_item1}>03</div>
                    <div className={`${styles.services__list_item2}`}>Авторский надзор</div>
                    <div className={styles.services__list_item3}>Контроль соответствия реализации дизайн-проекту, регулярные выезды на объект и взаимодействие с подрядчиками.</div>
                    
            
                    <div className={styles.services__list_item1}>04</div>
                    <div className={`${styles.services__list_item2} ${styles.services__underline}`}>Комплектация интерьера</div>
                    <div className={styles.services__list_item3}>Подбор и закупка мебели, освещения, материалов и декора с учётом бюджета, сроков и концепции проекта.</div>
                    
                
                    <div className={styles.services__list_item1}>05</div>
                    <div className={`${styles.services__list_item2}`}>Редизайн и обновление интерьера</div>
                    <div className={styles.services__list_item3}>Освежаем пространство без капитального ремонта: новые акценты, мебель, свет и цветовые решения.</div>
                </div>
            </div>
        </section>
    )
}

export default Services;