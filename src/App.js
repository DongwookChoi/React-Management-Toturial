import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '최동욱',
  'birthday': '921211',
  'gender': '남자',
  'job': '부자'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '길동홍',
    'birthday': '001211',
    'gender': '남자',
    'job': '리치'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '테드창',
    'birthday': '971211',
    'gender': '남자',
    'job': '밀매'
    }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
