import React, { useEffect, useState } from "react";
import HeroOne from "../assets/images/hero-2.1.svg";

function SecondBanner({ isActive = false }) {
    const [animKey, setAnimKey] = useState(0);

    useEffect(() => {
        if (isActive) setAnimKey((k) => k + 1);
    }, [isActive]);

    return (
        <div className="max-w-7xl mx-auto flex flex-col min-[1200px]:flex-row gap-2.5 pt-10 pb-10 relative overflow-x-hidden">
            <div className="max-w-full min-[1200px]:w-1/2 min-[1200px]:min-w-0 z-10 relative">
                <p className="text-[28px] min-[500px]:text-[32px] min-[1200px]:text-[36px] font-googleSans pb-5">
                    <span className="text-[#1946b6]">FinTech</span>
                    <span className="text-[#26b5e9]">5</span>
                    <span className="text-[#ef4444]">0</span>
                    <span className="text-[#f59e0b]">0</span>
                    <span className="text-[#84cc16]">MG</span>
                </p>

                <p className="text-[28px] min-[500px]:text-[36px] min-[1200px]:text-[48px] leading-9 min-[500px]:leading-12 min-[1200px]:leading-15">
                    Revolutionizing NBFC <br /> Processes with All-in One <br />
                    <span className="text-[#3b62c1]">FinTech Solutions</span>
                </p>

                <p className="text-[#767676] text-[14px] min-[500px]:text-[16px] pt-5 pb-5 max-w-130">
                    Transforming fintech operations with 5+ years of expertise in technology
                    solutions, user experience, and compliance
                </p>

                <button className='pt-2 pb-2 pl-5 pr-5 bg-[#1946b6] text-white rounded-md cursor-pointer transition duration-200 ease-out hover:bg-blue-700 hover:shadow-md hover:-translate-y-px active:scale-95 active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white'>
                    Explore
                </button>
            </div>

            <div className="absolute min-[1200px]:relative inset-0 min-[1200px]:inset-auto w-full min-[1200px]:w-1/2 min-[1200px]:min-w-0 h-full overflow-hidden overflow-x-hidden opacity-20 min-[1200px]:opacity-100 z-0 hidden min-[400px]:flex justify-center items-center">
                <div className="relative w-full max-w-[520px] overflow-hidden overflow-x-hidden">

                    <div className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 w-[420px] h-[300px] rounded-full border border-[#e7eefc]" />

                    <div className="pointer-events-none absolute -right-8 top-10 w-[120px] h-[120px] opacity-60">
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, rgba(34,197,94,1) 2px, transparent 2px)",
                                backgroundSize: "18px 18px",
                            }}
                        />
                    </div>

                    <img src={HeroOne} alt="Hero" className="relative z-10 w-full" />

                    {/* Badge: e-Mandate (outside left -> in) */}
                    <div
                        key={`secondBanner-left-${animKey}`}
                        className="absolute left-5 top-[110px] z-20"
                        style={{
                            animation: "slideInFromOutsideLeft 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
                            animationDelay: "150ms",
                        }}
                    >
                        <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#ccf4ff]/70 text-[#137588] font-semibold shadow-sm">
                            e-Mandate
                        </span>
                    </div>

                    {/* Badge: KYC (outside right -> in) */}
                    <div
                        key={`secondBanner-right-${animKey}`}
                        className="absolute right-20 top-[105px] z-20"
                        style={{
                            animation: "slideInFromOutsideRight 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
                            animationDelay: "250ms",
                        }}
                    >
                        <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#ccf4ff]/70 text-[#137588] font-semibold shadow-sm">
                            KYC
                        </span>
                    </div>

                    {/* Badge: Account Aggregator (outside bottom -> in) */}
                    <div
                        key={`secondBanner-bottom-${animKey}`}
                        className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20"
                        style={{
                            animation: "slideInFromOutsideBottom 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
                            animationDelay: "350ms",
                        }}
                    >
                        <span className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#ccf4ff]/70 text-[#137588] font-semibold shadow-sm leading-tight text-center">
                            Account <br /> Aggregator
                        </span>
                    </div>

                    {/* small teal blobs behind image (to mimic screenshot) */}
                    <div className="pointer-events-none absolute right-8 top-[92px] w-20 h-20 rounded-full bg-[#14b8a6] opacity-80 blur-[0.5px]" />
                    <div className="pointer-events-none absolute right-0 top-[160px] w-24 h-24 rounded-full bg-[#0891b2] opacity-85" />
                    <div className="pointer-events-none absolute left-[120px] top-[102px] w-20 h-20 rounded-full bg-[#14b8a6] opacity-70 blur-[1px]" />

                    {/* Keyframes */}
                    <style>{`
            /* Start fully outside the container, then slide to the badge's natural position */
            @keyframes slideInFromOutsideLeft {
              from { transform: translateX(-140%); opacity: 0; }
              to   { transform: translateX(0); opacity: 1; }
            }

            @keyframes slideInFromOutsideRight {
              from { transform: translateX(140%); opacity: 0; }
              to   { transform: translateX(0); opacity: 1; }
            }

            /* Since this badge uses -translate-x-1/2 via class, we must preserve X while animating Y */
            @keyframes slideInFromOutsideBottom {
              from { transform: translate(-50%, 160%); opacity: 0; }
              to   { transform: translate(-50%, 0); opacity: 1; }
            }
          `}</style>
                </div>
            </div>
        </div>
    );
}

export default SecondBanner;