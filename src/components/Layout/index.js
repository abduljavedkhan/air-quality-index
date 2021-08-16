import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-blend-hue">
            <Header />
                {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
