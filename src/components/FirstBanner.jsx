import React, { useEffect, useState } from 'react'
import HeroOne from '../assets/images/hero-1.1.svg'
import HeroTwo from '../assets/images/hero-1.2.svg'

function FirstBanner({ isActive = false }) {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    if (isActive) setAnimKey((k) => k + 1)
  }, [isActive])

  return (
    <div className='max-w-7xl mx-auto flex flex-col min-[1200px]:flex-row gap-2.5 pt-10 pb-10 px-4 min-[1200px]:px-0 relative'>
      <div className='max-w-full min-[1200px]:max-w-[520px] z-10 relative'>
        <p className='text-[28px] min-[500px]:text-[32px] min-[1200px]:text-[36px] font-googleSans pb-5'>
          <span className='text-[#1946b6]'>Chat</span>
          <span className='text-[#26b5e9]'>5</span>
          <span className='text-[#ef4444]'>0</span>
          <span className='text-[#f59e0b]'>0</span>
          <span className='text-[#84cc16]'>MG</span>
        </p>

        <p className='text-[28px] min-[500px]:text-[36px] min-[1200px]:text-[48px] leading-9 min-[500px]:leading-12 min-[1200px]:leading-15'>Your Secure Gateway to <br /> Seamless Business <br /> <span className='text-[#3b62c1]'>Communication</span></p>

        <p className='text-[#767676] text-[14px] min-[500px]:text-[16px] pt-5 pb-5'>An all-in-one platform for limitless business communication, seamless meetings, dual-screen sharing, media exchange, and in-house bots, boosting productivity and collaboration</p>

        <button className='pt-2 pb-2 pl-5 pr-5 bg-[#1946b6] text-white rounded-md cursor-pointer'>Explore</button>
      </div>

      <div className='absolute min-[1200px]:relative inset-0 min-[1200px]:inset-auto w-full h-full min-[1200px]:h-[460px] overflow-hidden opacity-20 min-[1200px]:opacity-100 z-0'>
        {/* AI Powered Chatbots card */}
        <div className='absolute top-[8%] left-[25%] -translate-x-1/2 w-[50%] min-[1200px]:w-[300px] max-w-[300px]'>
          <div key={`firstBanner-left-${animKey}`} className='animate-[slideInFromLeftOutside_800ms_ease-out_both] motion-reduce:animate-none'>
            <div className='relative rounded-2xl bg-white/70 backdrop-blur-md border border-violet-200 shadow-[0_12px_40px_rgba(124,58,237,0.18)]'>
              {/* top circle icon */}
              <div className='absolute -top-7 left-1/2 -translate-x-1/2'>
                <div className='h-10 w-10 min-[1200px]:h-14 min-[1200px]:w-14 rounded-full bg-gradient-to-tr from-fuchsia-500 to-violet-500 shadow-lg grid place-items-center ring-4 min-[1200px]:ring-8 ring-white/70'>
                  {/* simple bot icon (inline svg) */}
                  <svg
                    width='26'
                    height='26'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path d='M12 3v3' stroke='white' strokeWidth='2' strokeLinecap='round' />
                    <path
                      d='M7 7h10a4 4 0 0 1 4 4v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3a4 4 0 0 1 4-4Z'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinejoin='round'
                    />
                    <path d='M9 12h.01M15 12h.01' stroke='white' strokeWidth='3' strokeLinecap='round' />
                  </svg>
                </div>
              </div>

              <div className='px-4 min-[900px]:px-8 pt-5 min-[900px]:pt-7 pb-3 min-[900px]:pb-4 text-center'>
                <p className='text-[14px] min-[1200px]:text-[20px] leading-5 min-[1200px]:leading-7 font-semibold text-[#5b2a86]'>
                  AI - Powered Chatbots
                  <br />
                  like Jira bot, MoM bot
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dual screen sharing card */}
        <div className='absolute bottom-[5%] right-[10%] w-fit max-w-[92%]'>
          <div key={`firstBanner-bottom-${animKey}`} className='animate-[slideInFromBottomOutside_800ms_ease-out_200ms_both] motion-reduce:animate-none'>
            <div className='relative rounded-2xl bg-white/70 backdrop-blur-md border border-violet-200 shadow-[0_12px_40px_rgba(124,58,237,0.18)]'>
              {/* top circle icon */}
              <div className='absolute -top-7 left-[60px] min-[1200px]:left-23'>
                <div className='h-10 w-10 min-[1200px]:h-14 min-[1200px]:w-14 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 shadow-lg grid place-items-center ring-4 min-[1200px]:ring-8 ring-white/70'>
                  {/* simple "screens" icon */}
                  <svg
                    width='26'
                    height='26'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      d='M4 6.5h7.5v11H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12.5 8h7.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-7.5V8Z'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>

              <div className='px-4 min-[1200px]:pl-8 min-[1200px]:pr-10 pt-5 min-[1200px]:pt-7 pb-3 min-[1200px]:pb-5'>
                <p className='whitespace-nowrap text-[14px] min-[1200px]:text-[20px] font-semibold text-[#5b2a86]'>
                  Dual screen sharing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute left-0 bottom-[10%] w-[45%] min-[1200px]:w-[330.29px]'>
          <img src={HeroOne} alt="" className='w-full h-auto' />
        </div>

  <div className='absolute top-0 right-0 w-[45%] hidden min-[400px]:block'>
          <img src={HeroTwo} alt="" className='w-full h-auto' />
        </div>
      </div>
    </div>
  )
}

export default FirstBanner