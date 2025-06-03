import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';
import Nav from "./Components/Nav/Nav";
import LandingPage from './Components/LandingPage/LandingPage'

// Lazy load pages
const Dashboard = lazy(() => import('./Pages/Dashboard/DashboardPage'));
const Product = lazy(() => import('./Pages/Products/Products'));
const Bids = lazy(() => import('./Pages/Bids/Bid'));
const Enquiry = lazy(() => import('./Pages/Enquiry/Enquiry'));
const Orders = lazy(() => import('./Pages/Orders/Orders'));
const Review = lazy(() => import('./Pages/Review/Review'))
const Brochures = lazy(() => import('./Pages/Brochures/Brochures'))
const Media = lazy(() => import('./Pages/Media/Media'))
const Location = lazy(() => import('./Pages/LocationDirectory/Location'))
const Blog = lazy(() => import('./Pages/Blog/Blog'))
const EditProduct = lazy(() => import('./Pages/EditProduct/EditProduct'))
const AddProduct = lazy(() => import('./Pages/AddProduct/AddProduct'))
const AddBrochures = lazy(() => import('./Pages/AddBrochures/AddBrochures'))
const AddReview = lazy(() => import ('./Pages/AddReview/AddReview'))
const AddMedia = lazy(() => import('./Pages/AddMedia/AddMedia'))
const AddLocation = lazy(() => import('./Pages/AddLocation/AddLocations'))
const ReviewCard = lazy(() => import('./Components/PopUp/EditReview'))
const EditReview = lazy(() => import('./Components/PopUp/EditReview'))
const EditR = lazy(() => import('./Pages/EditReviews/EditR'))
const EditL = lazy(() => import('./Pages/EditLocation/EditL'))
const EditB = lazy(() => import('./Pages/EditBrochures/EditB'))
function App() {
  return (
    // <LandingPage />
    <Router>
      <div className="flex justify-start">
        <Nav />
        <div className="ml-16 lg:ml-32 w-full">


          <Suspense fallback={<div className="text-center mt-10">Lazy Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Product />} />
              <Route path="/bids" element={<Bids />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/review" element={<Review />} />
              <Route path="/brochures" element={<Brochures />} />
              <Route path="/brochures/edit/:id" element={<EditB />} />
              <Route path="/media" element={<Media />} />
              <Route path="/location" element={<Location />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/edit/:productType/:productTitle" element={<EditProduct />} />
              <Route path="/review/:clientname/edit" element={<EditR />} />
              <Route path ="/product/addProduct" element={<AddProduct/>}/>
              <Route path ="/review/addReview" element={<AddReview/>}/>
              <Route path ="/media/addMedia" element={<AddMedia/>}/>
              <Route path ="/location/addLocation" element={<AddLocation/>}/>
              <Route path ="/location/edit-location" element ={<EditL/>}/>
              <Route path ='/addBrochures' element ={<AddBrochures/>}/>
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
