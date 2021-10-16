import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState }  from 'react';


const Formulario = () => {
	const [formularioEnviado, setformularioEnviado] = useState(false);

	return (
		<>

		<Formik
			initialValues={{
				nombre: "",
				correo: ""
			}}
			validate={(valores)=>{
				let errores = {};

				if(!valores.nombre){
					errores.nombre = 'Por favor ingresa un nombre'
				}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
					errores.nombre = 'El nombre solo puede contener letras y espacios'
				}


				if(!valores.correo){
					errores.correo = 'Por favor ingresa un correo'
				}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
					errores.correo = 'El correo no es valido'
				}

				return errores;
			}}
			onSubmit={(valores, {resetForm})=>{
				console.log(valores)
				setformularioEnviado(true);
				resetForm();
			}}
		>
			{({errors}) =>(
			<Form className="formulario">

				<div>
					<label htmlFor="nombre">Nombre</label>
					<Field 
						type="text" 
						name="nombre" 
						id="nombre" 
						placeholder="Tu nombre" 
					/>
				</div>
				<ErrorMessage name = "nombre" component={()=>(
					<div className="error">{errors.nombre}</div>
				)}/>
				<div>
					<label htmlFor="correo">Nombre</label>
					<Field 
						type="text" 
						name="correo" 
						id="correo" 
						placeholder="Tu correo" 
					/>
				</div>
				<ErrorMessage name = "correo" component={()=>(
					<div className="error">{errors.correo}</div>
				)}/>				
				
				<button type="submit">Enviar</button>
				{formularioEnviado && <p className="exito">Formulario enviado con exito</p>}
			</Form>
			)}
		</Formik>

		</>
	);
}
 
export default Formulario;