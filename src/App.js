import './App.css';
import Fruit from './Fruit'

const data = [
  {id: 1, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5LK2bjoOBYmJb7y25qznCVb0twmxoXFJPQ&usqp=CAU',
  title: "Orange", uom:'02', size:'02', unit:'$8.99', total:'$17.89'},
  {id: 2, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNzmkjWQHeOjpenNZN_I_5UMTZpH2kt8K8w&usqp=CAU',
  title: "Apricot", uom:'02', size:'02', unit:'$8.99', total:'$17.89'},
  {id: 3, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QUVmkTqyM24lbKwr1ikMpcTlzG2SzFoP4A&usqp=CAU',
  title: "Cucumber", uom:'02', size:'02', unit:'$8.99', total:'$17.89'},
  {id: 4, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR916TgLJKOLz0_7KnkLyxwTSMFXywdAtxY4Q&usqp=CAU',
  title: "Potato", uom:'02', size:'02', unit:'$8.99', total:'$17.89'},
  {id: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6qqRIZEd3qvFV10J15Jbe16SKhuU52EsOg&usqp=CAU', 
  title: "Strawberry", uom:'02', size:'02', unit:'$8.99', total:'$17.89'},
  {id: 6, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgq7NJtAavhMjDFKLpSGgOn81CutZHUs7Jw&usqp=CAU',
  title: "PineApple", uom:'02', size:'02', unit:'$8.99', total:'$17.89'},
  {id: 7, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBm2AUGJiGfMPAbUYUPn3ALKD2MdyKtddxg&usqp=CAU',
  title: "Pomogranate", uom:'02', size:'02', unit:'$8.99', total:'$17.89'},
  {id: 8, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QUVmkTqyM24lbKwr1ikMpcTlzG2SzFoP4A&usqp=CAU',
  title: "Apricot", uom:'02', size:'02', unit:'$8.99', total:'$17.89'},
  
]

function App() {
  return (
    <div className="container">
      {
      data.map((value,index)=>{
        return(
          <div>
            <Fruit data={value}/>
          </div>
        )
      })
    }
    </div>
  );
}

export default App;
