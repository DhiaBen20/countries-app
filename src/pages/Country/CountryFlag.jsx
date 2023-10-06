export default function CountryFlag({ countryFlag }) {
    return (
        <div className="md:h-[400px]">
            <img
                src={countryFlag.svg}
                className="h-full w-full object-cover"
                alt=""
            />
        </div>
    );
}
