import { useParams } from 'react-router-dom';
import Categories from '../../components/Categories';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Products from '../../components/Products';




export default function Home() {
    let category = {
        name: "",
      };
      category = useParams();
    return (
         <Container>
            <Header/>
            <Categories />
         </Container>

    );
};