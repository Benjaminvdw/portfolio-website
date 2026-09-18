// Dashed box that marks where real content will go.
export default function Placeholder({ label, className = '' }) {
    return (
        <div
            className={`grid place-items-center rounded-xl border-2 border-dashed border-stone bg-stone/20 text-sm text-bark ${className}`}
        >
            {label}
        </div>
    )
}
