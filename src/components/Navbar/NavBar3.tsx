import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { IoMdAdd } from "react-icons/io";
import useNavbar from "../../hooks/useNavbar";
import { useState } from "react";
import Navbar, { DropdownItem } from "../../entities/Navbar";
import { useNavigate } from "react-router-dom";
import "./navbar3.css"; // Import the CSS file

const NavBar3 = () => {
  const { data: navData, isLoading, error } = useNavbar();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook to navigate between pages

  if (isLoading) return null;
  if (error) throw error;

  const orderedItems = [
    "Home",
    "Categories",
    "Services",
    "About Us",
    "Blogs",
    "Contact Us",
  ];

  // Default to an empty array if navData is undefined or has no `results`
  const navbarItems =
    navData && "results" in navData ? navData.results : navData || [];

  const categoryOrder = [
    "Mehndi",
    "Barat",
    "Walima",
    "Birthdays",
    "Corporate Functions",
    "Qawali Nights",
    "Dawat",
  ];

  // Sort categories based on categoryOrder array
  const sortCategories = (categories: DropdownItem[]) =>
    categories
      .slice() // Copy array to avoid mutating original
      .sort((a, b) => {
        const indexA = categoryOrder.indexOf(a.name);
        const indexB = categoryOrder.indexOf(b.name);
        // Place categories not found in categoryOrder at the end
        return (
          (indexA === -1 ? Infinity : indexA) -
          (indexB === -1 ? Infinity : indexB)
        );
      });

  // Sort each dropdown menu according to the defined category order
  const sortedNavData = orderedItems.map((itemTitle) => {
    const foundItem = navbarItems.find((item) => item.title === itemTitle) || {
      id: itemTitle,
      title: itemTitle,
      dropdown: [],
    };

    // Apply category sorting to the dropdown if it exists
    return {
      ...foundItem,
      dropdown: sortCategories(foundItem.dropdown),
    };
  });

  // const handleNavigation = (route: string) => {
  //   // navigate(route);
  //   const formattedRoute = route.toLowerCase().replace(/\s+/g, "-"); // Replace spaces with dashes
  //   navigate(formattedRoute);
  // };

  const handleNavigation = (category: string, subcategory?: string) => {
    console.log("Category:", category, "Subcategory:", subcategory);

    if (category === "Home") {
      // Navigate to home
      navigate("/");
      return;
    }

    if (category === "Decor" && !subcategory) {
      return;
    }

    if (category === "Decor" && subcategory) {
      if (["Mehndi", "Barat", "Walima"].includes(subcategory)) {
        navigate(`/events?type=${subcategory}`);
      }
      return;
    }

    if (["Mehndi", "Barat", "Walima"].includes(category)) {
      // Handle Mehndi, Barat, and Walima
      if (subcategory) {
        // Remove unnecessary words from subcategory, keeping it clean
        const cleanSubcategory = subcategory.split(" ")[0]; // Only use the first word, e.g., "Low"
        navigate(`/events?type=${category}&budget=${cleanSubcategory}&page=1`);
      } else {
        navigate(`/events?type=${category}`);
      }
      return;
    }

    // Default behavior for all other categories
    const formattedRoute = category.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${formattedRoute}`);
  };

  return (
    <Flex as="nav" className="navbar-container">
      {sortedNavData.map((navbarItem: Navbar) => (
        <Box
          key={navbarItem?.id}
          className="navbar-item"
          onMouseEnter={() => setHoveredItem(navbarItem.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navbarItem.dropdown.length > 0 ? (
            <Menu isOpen={hoveredItem === navbarItem.id}>
              <MenuButton
                as={Button}
                className="menu-button"
                rightIcon={
                  <ChevronDownIcon
                    className="chevron-icon"
                    transform={
                      hoveredItem === navbarItem.id
                        ? "rotate(180deg)"
                        : "rotate(0deg)"
                    }
                  />
                }
              >
                <Box
                  as="span"
                  color={hoveredItem === navbarItem.id ? "#DAA520" : "black"}
                >
                  {navbarItem.title}
                </Box>
              </MenuButton>
              <MenuList>
                {sortCategories(navbarItem.dropdown).map(
                  (dropdownItem: DropdownItem) => {
                    const hasSubmenuItems =
                      (dropdownItem.subcategories ?? []).length > 0 ||
                      (dropdownItem.subservices ?? []).length > 0;

                    return (
                      <Box
                        key={dropdownItem._id}
                        position="relative"
                        onMouseEnter={() =>
                          hasSubmenuItems
                            ? setHoveredSubmenu(dropdownItem._id)
                            : null
                        }
                        onMouseLeave={() => setHoveredSubmenu(null)}
                      >
                        <Flex alignItems="center">
                          <Button
                            rightIcon={
                              hasSubmenuItems ? <IoMdAdd /> : undefined
                            }
                            className="dropdown-button"
                            onClick={() =>
                              handleNavigation(dropdownItem.name, undefined)
                            }
                          >
                            <Box className="dropdown-item">
                              {dropdownItem.name}
                            </Box>
                          </Button>

                          {hasSubmenuItems && (
                            <Box
                              className={`submenu ${
                                hoveredSubmenu === dropdownItem._id
                                  ? "visible light-border-animation"
                                  : ""
                              }`}
                              // onMouseEnter={() =>
                              //   setHoveredSubmenu(dropdownItem._id)
                              // } // Submenu hover effect
                              // onMouseLeave={() => setHoveredSubmenu(null)} // Reset submenu hover state
                            >
                              {(dropdownItem.subcategories ?? []).map(
                                (subcategory: {
                                  _id: string;
                                  name: string;
                                }) => (
                                  <MenuItem
                                    key={subcategory._id}
                                    className="submenu-item"
                                    onClick={() =>
                                      handleNavigation(
                                        dropdownItem.name,
                                        // subcategory.name
                                        subcategory.name.split(" ")[0] // Extract only the first word (e.g., "Low")
                                      )
                                    }
                                  >
                                    <Box as="span">{subcategory.name}</Box>
                                  </MenuItem>
                                )
                              )}
                              {(dropdownItem.subservices ?? []).map(
                                (subservice: { _id: string; name: string }) => (
                                  <MenuItem
                                    key={subservice._id}
                                    className="submenu-item"
                                    onClick={() =>
                                      handleNavigation(
                                        dropdownItem.name,
                                        subservice.name
                                      )
                                    }
                                  >
                                    <Box as="span">{subservice.name}</Box>
                                  </MenuItem>
                                )
                              )}
                            </Box>
                          )}
                        </Flex>
                      </Box>
                    );
                  }
                )}
              </MenuList>
            </Menu>
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                className="menu-button"
                // onClick={() =>
                //   handleNavigation(
                //     `/${navbarItem.title.toLowerCase().replace(/\s+/g, "-")}`
                //   )
                // }
                onClick={() => handleNavigation(navbarItem.title)}
              >
                <Box
                  as="span"
                  color={hoveredItem === navbarItem.id ? "#DAA520" : "black"}
                >
                  {navbarItem.title}
                </Box>
              </MenuButton>
            </Menu>
          )}
        </Box>
      ))}
    </Flex>
  );
};

export default NavBar3;
