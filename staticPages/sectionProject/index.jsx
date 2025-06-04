
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))


function OmmyFacts () {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

function Header () {
    return (
        <header>
            <img src="react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

function MainContent () {
  return (
    <main>
    <h1>Reasons Why Ommy is the Best Pelican</h1>
    <ol>
      <li>Ommy FLy!</li>
      <li>Ommy love pelow!</li>
      <li>ommy sleep now...</li>
    </ol>
  </main>
  )
}

function Footer () {
  return (
    <footer>
      <p>© 20xx Mucha development. All rights reserved </p>
    </footer>
  )
}

root.render(
    <OmmyFacts />
)