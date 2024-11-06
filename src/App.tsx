
import {Suspense,lazy} from 'react';
import LoadingPage from './customComponents/customComponents/LoadingPage/App';
// const UsatNumbers=lazy(()=>import('./customComponents/customComponents/UsatNumbers/App'));
// const UsatGallery=lazy(()=>import('./customComponents/customComponents/UsatGallery/App'));
const Hero = lazy(() => import('./customComponents/customComponents/Hero/App'));
const About = lazy(() => import('./customComponents/customComponents/About/App.jsx'));
const Info = lazy(() => import('./customComponents/customComponents/Info/App'));
const Bachelor=lazy(() => import('./customComponents/customComponents/Bachelor/App'));
const MagistrInfo =lazy(() => import('./customComponents/customComponents/MagistrInfo/App'));
const Magistr = lazy(() => import('./customComponents/customComponents/Magistr/App'));
// const Questions = lazy(() => import('./customComponents/customComponents/Questions/App'));
const News = lazy(() => import('./customComponents/customComponents/News/App'));
// const Comments=lazy(()=>import('./customComponents/customComponents/Comments/App'));
// const Partners=lazy(()=>import('./customComponents/customComponents/Partners/App'));
const MainFooter=lazy(()=>import('./customComponents/customComponents/MainFooter/App'));
function App() {
    return (
        <>
            <Suspense fallback={<LoadingPage></LoadingPage>}>
                <Hero></Hero>
                <Info></Info>
                <About></About>
                {/* <UsatNumbers></UsatNumbers> */}
                <Bachelor></Bachelor>
                <MagistrInfo></MagistrInfo>
                <Magistr></Magistr>
                {/* <UsatGallery></UsatGallery> */}
                <News></News>
                {/* <Comments></Comments> */}
                {/* <Partners></Partners>    */}
                <MainFooter></MainFooter>
            </Suspense>
        </>
    )
}

export default App
