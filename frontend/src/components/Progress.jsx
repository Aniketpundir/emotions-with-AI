export default function Progress({ current, total }) {
    const width = ((current + 1) / total) * 100;

    return (
        <div className="progress">
            <div className="progress-bar" style={{ width: `${width}%` }} />
            <span>{current + 1} / {total}</span>
        </div>
    );
}
