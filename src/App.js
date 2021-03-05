import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import store from './store'
import './app.css'
import {addPeople} from './actions/peopleAction'
import SearchBar from './component/SearchBar';
import Pagination from './component/Pagination';
import TableRow from './component/TableRow';

function App() {
  const {people, pageSize, currentPage} = useSelector(state => state)

  const [peopleDisplay, setPeopleDisplay] = useState([])
  const [peopleFiltred, setPeopleFiltred] = useState([])
  const [totalPage, setTotalPage] = useState(0)

  const getFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => store.dispatch(addPeople(data)));
  }

  const searchInput = (value) => {
    setPeopleFiltred(people.filter(p => p.name.toLowerCase().includes(value.toLowerCase()) || p.email.toLowerCase().includes(value.toLowerCase()) ))
  }

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  useEffect(() => { getFetch() }, [])

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPeopleDisplay(peopleFiltred.slice(startIndex, endIndex))
    setTotalPage(Math.ceil(peopleFiltred.length / pageSize))
  },[peopleFiltred, currentPage])

  useEffect(() => {
    setPeopleFiltred(people)
  },[people])

  return (
    <div className="app">
        <SearchBar searchInput={searchInput}/>
        <TableRow peopleDisplay={peopleDisplay} />
        <Pagination pages={pages}/>
    </div>
  );
}

export default App;
