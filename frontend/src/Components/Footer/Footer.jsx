import { Typography } from "@material-tailwind/react";

const LINKS = [
    {
        title: "Product",
        items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
        title: "Company",
        items: ["About us", "Careers", "Press", "News"],
    },
    {
        title: "Resource",
        items: ["Blog", "Newsletter", "Events", "Help center"],
    },
];

const currentYear = new Date().getFullYear();

export default function FooterWithSocialLinks() {
    return (
        <footer className="w-full bg-blue-gray-100 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Typography variant="h5" className="text-blue-gray-700">
                    Material Tailwind
                </Typography>
                <div className="flex space-x-4">
                    {LINKS.map(({ title, items }) => (
                        <ul key={title} className="text-blue-gray-700">
                            <Typography variant="small" className="font-medium opacity-60">
                                {title}
                            </Typography>
                            {items.map((link) => (
                                <li key={link}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        color="gray"
                                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                                    >
                                        {link}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="flex space-x-4 text-blue-gray-700">
                    <Typography
                        as="a"
                        href="#"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        {/* Twitter SVG */}
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        {/* Facebook SVG */}
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        {/* LinkedIn SVG */}
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className="opacity-80 transition-opacity hover:opacity-100"
                    >
                        {/* Instagram SVG */}
                    </Typography>
                </div>
            </div>
            <div className="mt-4 border-t border-blue-gray-200">
                <div className="container mx-auto flex justify-between items-center">
                    <Typography
                        variant="small"
                        className="text-blue-gray-700"
                    >
                        &copy; {currentYear}{" "}
                        <a href="https://material-tailwind.com/" className="text-blue-gray-700">
                            Material Tailwind
                        </a>
                        . All Rights Reserved.
                    </Typography>
                    <div className="flex space-x-4 text-blue-gray-700">
                        {/* Social media icons */}
                        <Typography
                            as="a"
                            href="#"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            {/* Twitter SVG */}
                        </Typography>
                        <Typography
                            as="a"
                            href="#"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            {/* Facebook SVG */}
                        </Typography>
                        <Typography
                            as="a"
                            href="#"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            {/* LinkedIn SVG */}
                        </Typography>
                        <Typography
                            as="a"
                            href="#"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            {/* Instagram SVG */}
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}
