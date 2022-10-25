import PreviewTile from "./PreviewTile";

export default function ProjectsGrid({items = [], className = '', ...rest}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((project, key) => {
                return (
                    <PreviewTile {...project} key={`PreviewTile: ${key}-${project.id}`}/>
                )
            })}
        </div>
    )
}