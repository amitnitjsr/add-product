import Product from '../Container/Product/Table';
import AddProduct from '../Container/Product/Add';
import Signin from '../Container/Login/Signin';
import Signup from '../Container/Login/Signup';

const AppRouter = [
    { path: '/signin', exact: true, component: Signin },
    { path: '/signup', name: 'signup', component: Signup },

    { path: '/product', name: 'product', component: Product },
    { path: '/product/new', name: 'newproduct', component: Signup },
    { path: '/product/edit/:id', name: 'editproduct', component: AddProduct },
]

export default AppRouter;





