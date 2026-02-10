
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollectionPage from "./pages/collectionPage";
import MostPopularDetail from "./pages/MostPopularDetail"
import ReadyToWearCategoryPage from "./pages/ReadyToWearCategoryPage";
import NewArrival from "./pages/NewArrivals/NewArrival";
import West from "./pages/West/west";
import Summer from "./pages/Summer/Summer";
import Winter from "./pages/Winter/Winter";
import { useState, createContext } from "react";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import JewelleryCategory from "./pages/JewelleryCategory";
import JewelleryDetail from "./pages/JewelleryDetail";
import ReadyToWearSection from "./components/ReadyToWearSection";
import ReadyToWearDetail from "./pages/ReadyToWearDetail";
import WinterCollection from "./components/WinterCollection";
import CollectionDetail from "./pages/CollectionDetail";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import Footwear from "./pages/Footwear";
import FootwearDetail from "./pages/FootwearDetail";
import Shawls from "./pages/Shawls";
import ShawlDetail from "./pages/ShawlDetail";
import Dashboard from "./pages/AdminPanel/Dashboard";




export const SearchContext = createContext('');
function App() {
  const [searchText, setSearchText] = useState("")
  let searchHandler = (searchValue) => {
    setSearchText(searchValue)
  }

  return (

    <CartProvider>
      <SearchContext value={searchText}>
        <Router>
          <Navbar searchHandler={searchHandler} />

          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage searchText={searchText} />} />


            <Route path="/winter-collection" element={<WinterCollection />} />
            <Route path="/:category" element={<CategoryPage />} />

            <Route path="/:category/:id" element={<ProductDetail />} />


            {/* Ready to Wear */}
            <Route
              path="/ready-to-wear/:category" element={<ReadyToWearCategoryPage />}
            />

            {/* Collections */}
            <Route
              path="/collection/:type" element={<CollectionPage />}
            />
            {/* New Arrivals */}
            <Route path="/category/new-arrival/" element={<NewArrival />} />

            <Route
              path="/catagory/west" element={<West />}
            />
            <Route
              path="/admin/dashboard" element={<AdminPanel />}
            />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route

              path="/ready-to-wear/:slug"
              element={<ReadyToWearCategoryPage />}
            />

            <Route path="/popular/:id" element={<MostPopularDetail />} />
            <Route path="/collection/:type/:id" element={<CollectionDetail />} />
            <Route path="/collection/:type" element={<CollectionPage />} />

            <Route path="/catagory/summer" element={<Summer />} />

            <Route path="/catagory/Winter" element={<Winter />} />

            <Route path="/catagory/NewArrival" element={<NewArrival />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/jewellery/:category" element={<JewelleryCategory />} />

            <Route
              path="/jewellery/:category/:id"
              element={<JewelleryDetail />}
            />

            <Route path="/ready-to-wear" element={<ReadyToWearSection />} />
            <Route path="/ready-to-wear/:slug" element={<ReadyToWearCategoryPage />} />
            <Route path="/ready-to-wear/:category/:id" element={<ReadyToWearDetail />} />


            <Route path="/footwear" element={<Footwear />} />
            <Route path="/footwear/:id" element={<FootwearDetail />} />
            <Route path="/shawls" element={<Shawls />} />
            <Route path="/shawls/:id" element={<ShawlDetail />} />

          </Routes>
          <Footer />
        </Router>
      </SearchContext>

    </CartProvider>
  );
}

export default App;
