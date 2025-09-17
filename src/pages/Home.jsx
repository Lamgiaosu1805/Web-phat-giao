import { useEffect } from "react";
import banner from "../assets/bg_image.png";
import xoay from "../assets/xoay.png";
import tuongPhat from "../assets/tuong-phat.png"
import imgDemo from "../assets/img_demo.png"
import TitleLine from "@/components/TitleLine";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, CalendarDaysIcon } from "lucide-react";

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
                    <Card
                        className="flex flex-row gap-4 p-4 transition-all duration-200 border-0 sm:flex-row bg-gradient-card shadow-custom-md hover:shadow-custom-lg animate-fade-in group"
                    >
                        <div className="w-full sm:w-48 aspect-[3/2] flex-1">
                            <img
                                src={imgDemo}
                                alt="img-demo"
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>

                        <div className="flex flex-col text-left flex-2">
                            <h1 className="font-semibold text-md line-clamp-2">The first Buddha Dharma Day is celebrated on the 15th day of the 6th lunar month.</h1>
                            <div className="flex flex-row items-center">
                                <CalendarDaysIcon className='my-4 mr-2 size-6 text-muted-foreground' />
                                <p className="text-base text-neutral-400">19:00 - 01/08/2025</p>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Home;
