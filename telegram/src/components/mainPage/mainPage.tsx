import About from "../about/about";
import ProfileStats from "../profileStats/profileStats";
import SupportList from "../supportList/supportList";

function MainPage() {
    return (
        <div className="main-page">
            {/* <Header /> */}
            <ProfileStats />
            <SupportList />
            <About />
        </div>
    );
}

export default MainPage;