export default function ListItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <li>
            <span className="text-lg font-[600]">{label}: </span> {value}
        </li>
    );
}
