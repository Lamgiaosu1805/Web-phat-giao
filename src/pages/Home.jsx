import { useEffect } from "react";
import banner from "../assets/bg_image.png";
import xoay from "../assets/xoay.png";
import tuongPhat from "../assets/tuong-phat.png"
import TitleLine from "@/components/TitleLine";
import EventCard from "@/components/EventCard";

const Home = () => {
    useEffect(() => {
        document.title = "Buddhism";
    }, []);

    return (
        <div className="w-full">
            <div className="relative w-full max-h-[762px] overflow-hidden aspect-video">
                {/* Banner */}
                <img
                    src={banner}
                    alt="Buddhism Banner"
                    className="object-cover w-full opacity-30"
                />

                {/* Ảnh vuông xoay, nằm đè nửa lên banner */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[600px] md:w-[800px] lg:w-[1000px] max-w-full aspect-square">
                    <img
                        src={xoay}
                        alt="Square Shape"
                        className="object-contain w-full h-full animate-spin-slow"
                    />
                </div>
            </div>
            <div className="container flex flex-col md:flex-row" >
                <div className="">
                    <h1 className="pb-10 text-2xl font-medium text-black md:text-4xl">Peace in the Present Moment</h1>
                    <p className="font-roboto font-normal text-[14px] md:text-base leading-6 tracking-[0.5%] text-black">Life is impermanent; everything changes moment by moment, like clouds drifting across the vast sky, with nothing lasting forever. When we cling to wealth, fame, or even fleeting emotions, we bind ourselves to the endless cycle of suffering. Yet if we pause and turn inward, we discover that peace is not found outside, but already present in every breath, every mindful step.<br />
                        Each mindful breath brings us back to the present moment, free from the worries of the past and the anxieties of the future. When we plant a seed of compassion and nurture a wholesome thought, it grows, spreads, and transforms suffering into joy. One who lives with compassion and learns to let go of attachments is one who has found the path of true freedom.<br />
                        Remember, happiness is not a distant destination, but the very moments we live with clarity and love. In every small action—a smile, a gentle word, a kind thought—we create nourishing energy for ourselves and the world around us. And it is in those moments that the path of happiness and liberation unfolds, here and now.</p>
                </div>
                <img src={tuongPhat} alt="tuong-phat" className="object-contain max-h-[320px] md:max-h-[800px] w-full" />
            </div>
            <div className="container flex-1">
                <TitleLine title={"Upcoming Event"} />
                <div className="flex-1 mt-4">
                    <EventCard />
                </div>

            </div>
        </div>
    );
};

export default Home;
