import { Formik } from 'formik';
import React  from 'react';


const Formulario = () => {


	return (
		<>
		<Formik
			initialValues={{
				nombre: "David",
				correo: "dagarcia100@gmail.com"
			}}
			validate={(valores)=>{
				let errores = {};

				if(!valores.nombre){
					errores.nombre = 'Por favor ingresa un nombre'
				}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
					errores.nombre = 'El nombre solo puede contener letras y espacios'
				}

				return errores;
			}}
			onSubmit={(valores)=>{
				console.log(valores)
			}}
		>
			{({values, errors, handleSubmit, handleChange,handleBlur}) =>(
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
				{errors.nombre && <div className="error">{errors.nombre}</div>}
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
				{errors.correo && <div className="error">{errors.correo}</div>}
				<button type="submit">Enviar</button>
			</form>
			)}
		</Formik>

		</>
	);
}
 
export default Formulario;