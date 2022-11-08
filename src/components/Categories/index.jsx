import React from 'react'
import './style.css'

export default function Categories() {
	return (
		<div className='navigation-menu'>
			<h3 className='titulo-nav'>Categorias</h3>
			<ul className='lista-categoria'>
				<li className="btn-menu">Feminino</li>
				<li className="btn-menu">Masculino</li>
				<li className="btn-menu">Infantil</li>
				<li className="btn-menu">Calçados</li>
			</ul>
		</div>
	);
};