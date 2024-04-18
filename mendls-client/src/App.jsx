import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PastriesList from "./pages/PastriesList";
import BasketList from "./pages/BasketList";
import Pastries from "./utils/mendls_api";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Drawer from "@mui/material/Drawer";
import noise from "./assets/noise.png";
import { useLocation } from "react-router-dom";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import Checkout from "./pages/Checkout";
import ContactPage from "./pages/ContactPage";
import Pastry from "./pages/Pastry";
import useWindowWidth from "./helpers/useWindowWidth";

function App() {
  const [pastries, setPastries] = useState([]);
  const savedBasket = JSON.parse(localStorage.getItem("basket"));
  const [basket, setBasket] = useState(savedBasket || []);
  const [isBasketVisible, setIsBasketVisible] = useState(false);
  const location = useLocation();
  const drawerWidth = useWindowWidth().width > 748 ? 650 : "90%";

  useEffect(() => {
    Pastries.all().then((pastries) => {
      console.log(pastries);
      setPastries(pastries);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(pastry) {
    const existingPastryIndex = basket.findIndex(
      (item) => item.id === pastry.id
    );

    if (existingPastryIndex !== -1) {
      const updatedBasket = basket.map((item, index) => {
        if (index === existingPastryIndex) {
          return { ...item, ...pastry };
        }
        return item;
      });
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, pastry]);
    }
  }

  function removeItemFromBasket(pastry) {
    setBasket((prev) => {
      return prev.filter((item) => pastry.id !== item.id);
    });
    clearInputValue(pastry.id);
  }

  function clearInputValue(id) {
    setPastries((prev) => {
      const updatedPastries = prev.map((pastry) => {
        if (pastry.id === id) {
          return { ...pastry, qunatity: null };
        }
        return pastry;
      });
      return updatedPastries;
    });
  }

  console.log(location);

  return (
    <div>
      <NavBar
        setIsBasketVisible={setIsBasketVisible}
        basket={basket}
        location={location}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <PastriesList
                pastries={pastries}
                basket={basket}
                onBasketChange={addToBasket}
                footerVisible={location.pathname === "/#shop"}
              />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/success"
          element={<PaymentSuccess resetBasket={setBasket} />}
        />
        <Route path="/cancel" element={<PaymentCancel />} />
        <Route path="/checkout" element={<Checkout basket={basket} />} />
        <Route path="/contact" element={<ContactPage />} />
        {pastries.map((pastry) => {
          return (
            <Route
              path={`/shop/${pastry.title}`}
              element={
                <Pastry
                  pastry={pastry}
                  basket={basket}
                  onBasketChange={addToBasket}
                />
              }
            />
          );
        })}
      </Routes>
      <Drawer
        open={isBasketVisible}
        anchor="right"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            flexShrink: 0,
            backgroundImage: `url(${noise})`,
            backgroundPosition: "center",
            backgroundColor: "#FFFAF0",
          },
        }}
      >
        <BasketList
          basket={basket}
          onBasketChange={addToBasket}
          setIsBasketVisible={setIsBasketVisible}
          removeItemFromBasket={removeItemFromBasket}
        />
      </Drawer>
    </div>
  );
}

export default App;
