import { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../Auth";
import { allCategories } from "../Service/anime-service";


const CustomNavbar = () => {
    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)
    const [cat,setCat]=useState(undefined);

    useEffect(() => {

        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())

    }, [])


    const logout = () => {
        doLogout(() => {
            setLogin(false)
            navigate("/signUp")
        })
    }
    useEffect(()=>{
        try {
            allCategories().then((data)=>{
                console.log(data)
                setCat(data);
            })    
        } catch (error) {
            console.log(error)
        }
        

    },[])



    return (
        <div >
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed=""
                className="px-5"
            >
                <NavbarBrand tag={ReactLink} to="/">
                   Anime World
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >

                        <NavItem>
                            <NavLink tag={ReactLink} to="/" >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about" >
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/services" >
                                Donation
                            </NavLink>
                        </NavItem>



                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Categories
                            </DropdownToggle>
                            <DropdownMenu right>
                               
                               {cat?.map((cat)=>(
                                // let catId={cat.categoryId}
                                <DropdownItem tag={ReactLink} to={`/category/${cat.categoryId}`}>
                                {cat.title}
                                </DropdownItem>
                               ))
                                
                               }
                               
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>


                    <Nav navbar>

                        {
                            login && (

                                <>


                                    <NavItem>
                                        <NavLink tag={ReactLink} to={`/user/profile-info/${user?.data.user.userId}`} style={{color:"white"}} >
                                            Profile Info
                                        </NavLink>
                                    </NavItem>



                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/dashboard" style={{color:"white"}}>
                                            {user?.data.user.email}
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink onClick={logout} >
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </>



                            )
                        }

                        {
                            !login && (
                                <>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/login" >
                                            Login
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/signup" >
                                            Signup
                                        </NavLink>
                                    </NavItem>


                                </>
                            )
                        }

                    </Nav>





                </Collapse>
            </Navbar>
        </div>

    )
}

export default CustomNavbar;