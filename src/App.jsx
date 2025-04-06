import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
// Dynamically import images to prevent build errors if they don't exist
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
// import ThemeDebug from "./components/ThemeDebug/ThemeDebug"; // Uncomment to use the debug component

// Error Boundary Component to catch rendering errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-700 rounded-md m-4">
          <h2 className="font-bold">Something went wrong</h2>
          <p>{this.state.error?.message || "Unknown error"}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <main className="overflow-x-hidden dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          <ErrorBoundary>
            <NavbarBanner />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary>
            <NumberCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <WhyChooseUs />
          </ErrorBoundary>
          <ErrorBoundary>
            {Img1 ? <Banner {...BannerData} /> : 
              <div className="bg-yellow-100 p-4 text-yellow-800">Banner image not found</div>}
          </ErrorBoundary>
          <ErrorBoundary>
            {Img2 ? <Banner {...BannerData2} reverse={true} /> : 
              <div className="bg-yellow-100 p-4 text-yellow-800">Banner image not found</div>}
          </ErrorBoundary>
          <ErrorBoundary>
            <SubjectCard />
          </ErrorBoundary>
          <ErrorBoundary>
            <Testimonial />
          </ErrorBoundary>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
