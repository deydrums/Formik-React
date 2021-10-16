import { Formik } from 'formik';
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
			{({values, errors, touched, handleSubmit, handleChange,handleBlur}) =>(
			<form className="formulario" onSubmit={handleSubmit}>

				<div>
					<label htmlFor="nombre">Nombre</label>
					<input 
					type="text" 
					name="nombre" 
					id="nombre" 
					placeholder="Tu nombre" 
					value={values.nombre} 
					onChange={handleChange}
					onBlur={handleBlur}
					/>
				</div>
				{touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
				<div>
					<label htmlFor="correo">Nombre</label>
					<input 
					type="text" 
					name="correo" 
					id="correo" 
					placeholder="Tu correo" 
					value={values.correo} 
					onChange={handleChange}
					onBlur={handleBlur}
					/>
				</div>
				{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
				<button type="submit">Enviar</button>
				{formularioEnviado && <p className="exito">Formulario enviado con exito</p>}
			</form>
			)}
		</Formik>

		</>
	);
}
 
export default Formulario;