import Link from "next/link";


export default function Footer() {
    let newDate = new Date()
    let year = newDate.getFullYear();
    return (
        <footer>
            <div className="flex items-center justify-around"> 
                <Link className="flex items-center" href="/">
                    <h1 className="text-2xl md:text-4xl font-bold">V<span className="text-primary">B</span></h1>
                </Link>
                <p>© {year} Vikrant Rudolf Belu</p>
            </div>
        </footer>
    );
}