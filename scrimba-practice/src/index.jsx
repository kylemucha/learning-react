
import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge:
 * 
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 * 
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 */



function OmmyFacts () {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}


root.render(
    <OmmyFacts />
)