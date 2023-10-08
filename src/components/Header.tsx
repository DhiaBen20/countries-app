import ModeSwticher from "./ThemeSwitcher";

export default function Header() {
    return (
        <header className="flex h-[99px] bg-white px-5 text-[14px] shadow dark:bg-[#2B3743] md:h-[80px]">
            <div className="container mx-auto flex items-center justify-between">
                <p className="font-[800]">Where in the world?</p>
                <ModeSwticher />
            </div>
        </header>
    );
}
