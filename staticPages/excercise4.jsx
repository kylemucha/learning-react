/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */



import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */


function OmmyFacts () {
    return (
        <div>
          <header>
            <img src="react-logo.png" width="40px" alt="React logo" />
          </header>

          <main>
            <h1>Reasons Why Ommy is the Best Pelican</h1>
            <ol>
              <li>Ommy FLy!</li>
              <li>Ommy love pillow!</li>
              <li>ommy sleep now...</li>
            </ol>
          </main>

          <footer>
            <p>© 20xx Mucha development. All rights reserved </p>
          </footer>

        </div>
    )
}

root.render(
    <OmmyFacts />
)
