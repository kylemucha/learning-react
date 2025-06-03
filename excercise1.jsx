/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root"))
root.render(<ul>
<li>To learn how to make creative frontend elements!</li>
<li>To learn how to make my own websites!</li>
<li>To improve my skillset with industry standard frameworks!</li>
</ul>)