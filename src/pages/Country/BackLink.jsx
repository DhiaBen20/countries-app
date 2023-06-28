import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../../components/icons";

export default function BackLink() {
    return (
        <Link
            to={`/`}
            className="inline-flex items-center gap-4 rounded bg-white px-6 py-2 shadow-lg dark:bg-[#2B3743]"
        >
            <ArrowLeftIcon />
            <span className="text-lg">Back</span>
        </Link>
    );
}
