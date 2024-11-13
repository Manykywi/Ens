import Card from '../../components/Card/Card';
import { Banner, GridContainer } from './styles';

export default function Home() {
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

  return (
    <div>
      <Banner />
      <GridContainer>
        {mockDataArray.map((item, index) => (
          <Card key={index} imgSrc={item.imgSrc} title={item.title} price={item.price} />
        ))}
      </GridContainer>
    </div>
  );
}
