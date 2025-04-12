import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import BirthdayPage from "./pages/BirthdayPage";
import CorporateFunctionsPage from "./pages/CorporateFunctionsPage";
import QawaliNightsPage from "./pages/QawaliNightsPage";
import DawatPage from "./pages/DawatPage";
import CateringPage from "./pages/CateringPage";
import VenueSelectionPage from "./pages/VenueSelectionPage";
import FloralArrangementsPage from "./pages/FloralArrangementsPage";
import LightingAndAmbiancePage from "./pages/LightingAndAmbiancePage";
import GuestManagementPage from "./pages/GuestManagementPage";
import PreWeddingActivitiesPage from "./pages/PreWeddingActivitiesPage";
import ThemeConceptualizationPage from "./pages/ThemeConceptualizationPage";
import MeetUsPage from "./pages/MeetUsPage";
import OurVisionPage from "./pages/OurVisionPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import WeCarePage from "./pages/WeCarePage";
import WhyUsPage from "./pages/WhyUsPage";
import BlogsPage from "./pages/BlogsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import SimpleLayout from "./pages/SimpleLayout";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> }, // Add this route
      // { path: "games/:slug", element: <GameDetailPage /> },
      { path: "events/:id", element: <EventDetailPage /> }, // Add this route for event details
      { path: "birthdays", element: <BirthdayPage /> }, // Birthdays route
      { path: "corporate-functions", element: <CorporateFunctionsPage /> }, // Birthdays route
      { path: "qawali-nights", element: <QawaliNightsPage /> }, // Birthdays route
      { path: "dawat", element: <DawatPage /> }, // Birthdays route
      { path: "catering", element: <CateringPage /> }, // Birthdays route
      { path: "venue-selection", element: <VenueSelectionPage /> }, // Birthdays route
      { path: "floral-arrangements", element: <FloralArrangementsPage /> }, // Birthdays route
      { path: "lighting-and-ambiance", element: <LightingAndAmbiancePage /> }, // Birthdays route
      { path: "guest-management", element: <GuestManagementPage /> }, // Birthdays route
      { path: "pre-wedding-activities", element: <PreWeddingActivitiesPage /> }, // Birthdays route
      {
        path: "theme-conceptualization",
        element: <ThemeConceptualizationPage />,
      }, // Birthdays route
      { path: "meet-us", element: <MeetUsPage /> }, // Birthdays route
      { path: "our-vision", element: <OurVisionPage /> }, // Birthdays route
      { path: "testimonials-and-reviews", element: <TestimonialsPage /> }, // Birthdays route
      { path: "we-care", element: <WeCarePage /> }, // Birthdays route
      { path: "why-us", element: <WhyUsPage /> }, // Birthdays route
      { path: "blogs", element: <BlogsPage /> }, // Birthdays route
      { path: "contact-us", element: <ContactUsPage /> }, // Birthdays route
    ],
  },
  {
    path: "/login",
    element: <SimpleLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: "/register",
    element: <SimpleLayout />,
    children: [{ index: true, element: <RegisterPage /> }],
  },
]);

export default router;
