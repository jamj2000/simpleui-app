import { Code } from "bright"

// Code.theme = "github-dark"

async function Codigo({ children }) {
    'use cache'
    return (
        <Code lang="js">{children.trim()}</Code>
    )
}

export default Codigo