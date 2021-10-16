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
			onSubmit={()=>{
				console.log("Formulario enviado")
			}}
		>
			{({values, handleSubmit, handleChange}) =>(
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
					/>
				</div>
				<div>
					<label htmlFor="correo">Nombre</label>
					<input 
					type="text" 
					name="correo" 
					id="correo" 
					placeholder="Tu correo" 
					value={values.correo} 
					onChange={handleChange}
					/>
				</div>
				<button type="submit">Enviar</button>
			</form>
			)}
		</Formik>

		</>
	);
}
 
export default Formulario;