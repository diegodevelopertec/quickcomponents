import {Routes as Router,Route} from 'react-router-dom'
import { CousersPage } from './Pages/Cousers'
import { HomePage } from './Pages/Partials/Home'

export const Routes=()=>{

    return <Router>
              //Qlqur
            <Route path='/' element={<HomePage />}  />
            <Route path='/courses' element={<CousersPage />}  />


            //usuarios
            <Route path='/login/user' element={<CousersPage />}  />
            <Route path='/register/user' element={<CousersPage />}  />
            <Route path='/user/mycourses' element={<CousersPage />}  />

                //admin
            <Route path='/login/admin' element={<CousersPage />}  />
            <Route path='/register/admin' element={<CousersPage />}  />
            <Route path='/admin/courses' element={<CousersPage />}  />
            <Route path='/admin/courses/cadastrarcourse' element={<CousersPage />}  />

    </Router>


}