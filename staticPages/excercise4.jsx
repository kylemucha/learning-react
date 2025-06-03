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

function OmmyFacts () {
    return (
        <main>
        <ol>
            <li>Ommy FLy!</li>
            <li>Ommy love pillow!</li>
            <li>ommy sleep now...</li>
        </ol>
        </main>
    )
}

root.render(
    <OmmyFacts />
)