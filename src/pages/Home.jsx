import { useEffect } from "react";
import banner from "../assets/bg_image.png";
import xoay from "../assets/xoay.png";
import tuongPhat from "../assets/tuong-phat.png"
import TitleLine from "@/components/TitleLine";
import EventCard from "@/components/EventCard";
import { CalendarDaysIcon } from "lucide-react";
import lecDemoImg from "../assets/lec_demo.png";
import bookDemoImg from "../assets/book_demo.jpg"

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
                <div className="grid flex-1 grid-cols-1 gap-3 mt-4 md:grid-cols-3 md:gap-8">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <EventCard key={index} index={index} />
                    ))}
                </div>
            </div>
            <div className="container flex-1">
                <TitleLine title={"Latest Lectures"} />
                <div className="flex flex-row pb-8 mt-8 border-b border-neutral-400">
                    <div className="flex flex-col items-center flex-1">
                        <h2 className="font-sans text-[14px] font-semibold leading-6 tracking-normal text-neutral-800 mb-5 md:hidden">Aug</h2>
                        <h2 className="font-sans text-[20px] hidden font-medium leading-6 tracking-normal text-neutral-800 mb-5 md:flex">August</h2>
                        <h2 className="font-sans text-base font-semibold leading-6 tracking-normal text-neutral-800 md:text-[48px] md:font-medium">04</h2>
                    </div>
                    <div className="pr-2 flex-3">
                        <h1 className="font-sans text-base font-semibold leading-6 tracking-normal text-neutral-800">Riwo Sangcho | Tibetan Fire Offering</h1>
                        <div className="flex flex-row items-center">
                            <CalendarDaysIcon className='my-4 mr-2 size-5 text-neutral-800' />
                            <p className="text-[14px] text-neutral-800">19:00 - 01/08/2025</p>
                        </div>
                        <p className="line-clamp-2 text-[14px] leading-6 tracking-normal text-neutral-800 md:line-clamp-none">Buddhist Sunday Practice Every Sunday 11:15 am Meditation and preliminary practice, developed by Losel Shedrup Ling’s founder Geshe Tenzin Chodrak (aka Dadul Namgyal), focuses on Shakyamuni Buddha and the Heart Sutra. This practice is open to all. No charge – donations to the center are always welcome</p>
                    </div>
                    <div className="max-w-[405px] flex-2">
                        <div className="aspect-[3/2]">
                            <img
                                src={lecDemoImg}
                                alt="lec-demo"
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pb-8 mt-8 border-b border-neutral-400">
                    <div className="flex flex-col items-center flex-1">
                        <h2 className="font-sans text-[14px] font-semibold leading-6 tracking-normal text-neutral-800 mb-5 md:hidden">Aug</h2>
                        <h2 className="font-sans text-[20px] hidden font-medium leading-6 tracking-normal text-neutral-800 mb-5 md:flex">August</h2>
                        <h2 className="font-sans text-base font-semibold leading-6 tracking-normal text-neutral-800 md:text-[48px] md:font-medium">04</h2>
                    </div>
                    <div className="pr-2 flex-3">
                        <h1 className="font-sans text-base font-semibold leading-6 tracking-normal text-neutral-800">Riwo Sangcho | Tibetan Fire Offering</h1>
                        <div className="flex flex-row items-center">
                            <CalendarDaysIcon className='my-4 mr-2 size-5 text-neutral-800' />
                            <p className="text-[14px] text-neutral-800">19:00 - 01/08/2025</p>
                        </div>
                        <p className="line-clamp-2 text-[14px] leading-6 tracking-normal text-neutral-800 md:line-clamp-none">Buddhist Sunday Practice Every Sunday 11:15 am Meditation and preliminary practice, developed by Losel Shedrup Ling’s founder Geshe Tenzin Chodrak (aka Dadul Namgyal), focuses on Shakyamuni Buddha and the Heart Sutra. This practice is open to all. No charge – donations to the center are always welcome</p>
                    </div>
                    <div className="max-w-[405px] flex-2">
                        <div className="aspect-[3/2]">
                            <img
                                src={lecDemoImg}
                                alt="lec-demo"
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                {/* Lecture */}
                <div className="flex flex-row pb-8 mt-8">
                    <div className="flex flex-col items-center flex-1">
                        <h2 className="font-sans text-[14px] font-semibold leading-6 tracking-normal text-neutral-800 mb-5 md:hidden">Aug</h2>
                        <h2 className="font-sans text-[20px] hidden font-medium leading-6 tracking-normal text-neutral-800 mb-5 md:flex">August</h2>
                        <h2 className="font-sans text-base font-semibold leading-6 tracking-normal text-neutral-800 md:text-[48px] md:font-medium">04</h2>
                    </div>
                    <div className="pr-2 flex-3">
                        <h1 className="font-sans text-base font-semibold leading-6 tracking-normal text-neutral-800">Riwo Sangcho | Tibetan Fire Offering</h1>
                        <div className="flex flex-row items-center">
                            <CalendarDaysIcon className='my-4 mr-2 size-5 text-neutral-800' />
                            <p className="text-[14px] text-neutral-800">19:00 - 01/08/2025</p>
                        </div>
                        <p className="line-clamp-2 text-[14px] leading-6 tracking-normal text-neutral-800 md:line-clamp-none">Buddhist Sunday Practice Every Sunday 11:15 am Meditation and preliminary practice, developed by Losel Shedrup Ling’s founder Geshe Tenzin Chodrak (aka Dadul Namgyal), focuses on Shakyamuni Buddha and the Heart Sutra. This practice is open to all. No charge – donations to the center are always welcome</p>
                    </div>
                    <div className="max-w-[405px] flex-2">
                        <div className="aspect-[3/2]">
                            <img
                                src={lecDemoImg}
                                alt="lec-demo"
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                {/* Trich dan */}
                <div className="flex flex-col items-center mt-8 xl:flex-row">
                    <div className="flex-1">
                        <h1 className="text-base font-semibold text-neutral-900 md:text-2xl md:font-medium">Ajahn Brahm</h1>
                        <p className="text-[14px] text-neutral-900 mt-4 md:mt-8 md:text-base">In every moment, life offers us a choice: to nurture the seeds of peace or to feed the fires of anger.</p>
                        <p className="text-[14px] text-neutral-900 mt-2 md:mt-6 md:text-base">The mind is like a garden — if we plant compassion, we will harvest joy; if we plant greed, we will harvest suffering.</p>
                        <p className="text-[14px] text-neutral-900 mt-2 md:mt-6 md:text-base">True freedom is not found in escaping the world, but in meeting each moment with awareness and kindness</p>
                        <p className="text-[14px] text-neutral-900 mt-2 md:mt-6 md:text-base">Walk gently, speak truthfully, and let your heart be as vast as the sky.</p>
                    </div>
                    <div className="flex-1">
                        <img src={bookDemoImg} alt="book-demo" className="mix-blend-multiply max-w-[289px] xl:max-w-[652px] md:w-[500px] w-full h-auto"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
