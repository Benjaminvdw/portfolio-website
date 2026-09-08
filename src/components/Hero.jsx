import CodeBlock from "./CodeBlock.jsx"

export default function Hero() {
    return (
        <div className="p-5">
            <h1 className="text-5xl">Benjamin van der Westen</h1>
            <p>{'>'}Fullstack developer</p>

            <div className="justify-center flex flex-row gap-5 mt-10">
                <a href="https://github.com/"><img className="h-7" src="src/assets/github-142-svgrepo-com.svg" alt="" /></a>
                <a href="https://linkedin.com/"><img className="h-7" src="src/assets/linkedin-161-svgrepo-com.svg" alt="" /></a>
            </div>
        </div>
    )
}