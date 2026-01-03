export default function Progress({ current, total }) {
    return (
        <div className="progress">
            <div
                className="progress-bar"
                style={{ width: `${((current + 1) / total) * 100}%` }}
            />
            <span>{current + 1} / {total}</span>
        </div>
    );
}
