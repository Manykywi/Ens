import Card from '../../components/Card/Card';
import { GridContainer, ProductsContainer } from './styles';

const mockDataArray = [
  {
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1200px-Monster_Energy_drink_%28cropped%29.jpg',
    title: 'Energy Drink 1',
    price: '$2.99',
  },
  {
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1200px-Monster_Energy_drink_%28cropped%29.jpg',
    title: 'Energy Drink 2',
    price: '$3.49',
  },
  {
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1200px-Monster_Energy_drink_%28cropped%29.jpg',
    title: 'Energy Drink 3',
    price: '$4.00',
  },
  {
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1200px-Monster_Energy_drink_%28cropped%29.jpg',
    title: 'Energy Drink 3',
    price: '$4.00',
  },
];

export default function Products() {
  return (
    <ProductsContainer>
      <GridContainer>
        <h2>Топ продажу</h2>
        <div>
          {mockDataArray.map((item, index) => (
            <Card key={index} imgSrc={item.imgSrc} title={item.title} price={item.price} />
          ))}
        </div>
      </GridContainer>
      <GridContainer>
        <h2>Сьогознижка</h2>
        <div>
          {mockDataArray.map((item, index) => (
            <Card key={index} imgSrc={item.imgSrc} title={item.title} price={item.price} />
          ))}
        </div>
      </GridContainer>
    </ProductsContainer>
  );
}
