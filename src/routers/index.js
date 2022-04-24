import Login from '../pages/Login'
import Document from '../pages/Document'
import Edit from '../pages/Edit'
import List from '../pages/List'
import Register from '../pages/Register'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import App from '../App'


const BaseRouter = () =>{
    return(
<Router>
<Routes>
    <Route path='/' element={<App/>}>
        <Route path='/doc' element={<Document/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
    </Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
</Routes>

</Router>
)
}

/*
const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/list' element={<List />}></Route>
                <Route path='/edit' element={<Edit />}></Route>
                <Route path='/edit/:id' element={<Edit />}></Route>
                <Route path='/doc' element={<Document />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </Router>
)
*/
export default BaseRouter;