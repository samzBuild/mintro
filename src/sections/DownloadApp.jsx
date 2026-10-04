import Logo from "../components/Logo"
import SignIn from "../components/SignIn"

const DownloadApp = () => {
  return (
    <div>
        <div>
            <p>Download Our App</p>
            <h3 className="capitalize">Get Exclusive Offers on the Zesty app</h3>
            <p>Download now and enjopy special discounts, fast delivery and easy tracking</p>
            <SignIn text="Download the App"/>
        </div>
        <div>
            <Logo/>
            <div>
                <div>Get it on <span>Google play</span></div>
                <div>Download the app on <span>App Store</span></div>
                
            </div>
        </div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default DownloadApp