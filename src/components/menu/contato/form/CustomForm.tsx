import React from 'react';

import {Formik, Form, Field, ErrorMessage, FormikHelpers} from "formik"

import styles from './CustomForm.module.css';
import FormSchema from "../../../schema/FormSchema";


interface IFormikValues {
    name: string;
    email: string;
    cpf: string;
    data: string;
    telefone: string;
    instagram: string;
}

const initialValues = {
    name: "",
    email: "",
    cpf: "",
    data: "", 
    telefone: "", 
    instagram: "",
};

const CustomForm = () => {
    const onSubmit = (values: IFormikValues, actions: FormikHelpers<IFormikValues>) => {
        actions.setSubmitting(true);
        actions.resetForm()
        
    };

    return (
        <div className={styles["form-container"]}>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={FormSchema}>
                {({ errors, touched}) => (
                    <Form>
                        <div className={styles["form-col"]}>
                            <label htmlFor="name">Nome</label>
                            <Field className={errors.name && touched.name && "invalid"} placeholder="Seu nome completo" id="name" name ="name"/>
                            <ErrorMessage component="span"
                             name="name" 
                             className={styles["form-invalid"]}/>
                        </div>
                        <div className={styles["form-col"]}>
                            <label htmlFor="email">E-mail</label>
                            <Field className={errors.email && touched.email && "invalid"} placeholder="Seu e-mail" id="email" name ="email"/>
                            <ErrorMessage component="span"
                             name="email" 
                             className={styles["form-invalid"]}/>
                        </div>
                        <div className={styles["form-col"]}>
                            <label htmlFor="cpf">CPF</label>
                            <Field className={errors.cpf && touched.cpf && "invalid"} placeholder="000 000 000 00" id="cpf" name ="cpf"/>
                            <ErrorMessage component="span" 
                            name="cpf" 
                            className={styles["form-invalid"]}/>
                        </div>
                        <div className={styles["form-col"]}>
                            <label htmlFor="data">Data de Nascimento:</label>
                            <Field className={errors.data && touched.data && "invalid"} placeholder="00 . 00 . 0000" id="data" name ="data"/>
                            <ErrorMessage component="span"
                             name="data" 
                             className={styles["form-invalid"]}/>
                        </div>
                        <div className={styles["form-col"]}>
                            <label htmlFor="tel">Telefone:</label>
                            <Field className={errors.telefone && touched.telefone && "invalid"} placeholder="(+00) 00000 0000" id="tel" name ="tel"/>
                            <ErrorMessage component="span" 
                            name="tel" 
                            className={styles["form-invalid"]}/>
                        </div>
                        <div className={styles["form-col"]}>
                            <label htmlFor="insta">Instagram</label>
                            <Field className={errors.instagram && touched.instagram && "invalid"} placeholder="@seuuser" id="insta" name ="insta"/>
                            <ErrorMessage component="span" 
                            name="insta" 
                            className={styles["form-invalid"]}/>
                        </div>

                        <div className={styles["form-check"]}>
                            <label htmlFor="checkbox">*Declaro que li e aceito</label>
                            <input type="checkbox" id="checkbox" name="checkbox"></input>
                        </div>
                            
                        <button type="submit">CADASTRE-SE</button>
                        
                    </Form>
                )}
                
            </Formik>
        </div>
    )
};

export default CustomForm;