export default function ListItem({ label, value }) {
    return (
        <li>
            <span className="text-lg font-[600]">{label}: </span> {value}
        </li>
    );
}
