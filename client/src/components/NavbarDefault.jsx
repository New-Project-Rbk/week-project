import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  
  Typography,
  Button,
  
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
 
export function NavbarDefault({fetchData}) {
  // const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate()
 
  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false),
  //   );
  // }, []);

  const logout = ()=>{
localStorage.clear()
// navigate('/')
fetchData()
  }
  var x = ''
  var y = {}
  if (localStorage.getItem('lolo')) {
    x=JSON.stringify(localStorage.getItem('lolo'))
    y = jwtDecode(x)
    
  }
  


 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        {localStorage.getItem('lolo')&&<div><svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5ZM10 5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5C7.46957 7.5 6.96086 7.28929 6.58579 6.91421C6.21071 6.53914 6 6.03043 6 5.5C6 4.96957 6.21071 4.46086 6.58579 4.08579C6.96086 3.71071 7.46957 3.5 8 3.5C8.53043 3.5 9.03914 3.71071 9.41421 4.08579C9.78929 4.46086 10 4.96957 10 5.5ZM8 9.5C7.0426 9.49981 6.10528 9.77449 5.29942 10.2914C4.49356 10.8083 3.85304 11.5457 3.454 12.416C4.01668 13.0706 4.71427 13.5958 5.49894 13.9555C6.28362 14.3152 7.13681 14.5009 8 14.5C8.86319 14.5009 9.71638 14.3152 10.5011 13.9555C11.2857 13.5958 11.9833 13.0706 12.546 12.416C12.147 11.5457 11.5064 10.8083 10.7006 10.2914C9.89472 9.77449 8.9574 9.49981 8 9.5Z"
            fill="#90A4AE"
          />
        </svg>
        <a href="#" className="flex items-center">
         Welcome {y.firstName}
        </a></div>}
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        {localStorage.getItem('lolo')&&<div> 
        <button onClick={()=>{navigate('Cart')}} className="flex items-center"  >
        <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </button></div>}
       
        

      </Typography>
    
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4" style={{backgroundColor:"black"}}> 
      
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
            <div> 
      <input type="text" style={{backgroundColor:"transparent",color:"wheat",border: "2px solid wheat"}} placeholder="search..."/>
      <Button variant="text" size="sm" className="hidden lg:inline-block" >
            <span style={{color:"grey"}}>Search</span>
          </Button>
          </div>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          {!localStorage.getItem('lolo')&&<Button variant="text" size="sm" className="hidden lg:inline-block" onClick={()=>navigate('Login')}>
            <span style={{color:"grey"}}>Log In</span>
          </Button>}
          {localStorage.getItem('lolo')&&<Button variant="text" size="sm" className="hidden lg:inline-block" onClick={logout}>
            <span style={{color:"grey"}}>Logout</span>
          </Button>}
          {y.email==="admin"&&<Button variant="text" size="sm" className="hidden lg:inline-block" onClick={()=>navigate('NewProduct')}>
            <span style={{color:"grey"}}>Add Product</span>
          </Button>}
          {!localStorage.getItem('lolo')&&<Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            onClick={()=>navigate('SignUp')}
          >
            <span style={{color:"grey"}}>Sign up</span>
          </Button>}
        </div>
        {/* <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton> */}
      </div>
      
     
      
    </Navbar>
  );
}