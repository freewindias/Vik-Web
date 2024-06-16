import Brush from "../components/animated-gifs/brush";

export const revalidate = 30;

export default function AboutPage() {
    return (
        <div>
            <h1>about Page</h1>
            <div className=" h-96 w-96">
                <Brush/>
            </div>
            
        </div>
    );
}