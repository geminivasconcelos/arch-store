import React from 'react';
import { Container } from './style';
import { useParams } from 'react-router-dom';
import Categorias from '../../components/Categories';
import Products from '../../components/Products';
import Header from '../../components/Header';

export default function Categories() {
    let category = {
        name: ''
    };
    category = useParams();
    
    return (
        <Container>
            <Header/>
            <Categorias />
            <Products category={category.name}/>
        </Container>
    )
};
