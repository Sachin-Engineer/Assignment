import React, { useEffect, useState } from 'react'
import HeroOne from '../assets/images/hero-1.1.svg'
import HeroTwo from '../assets/images/hero-1.2.svg'

function FirstBanner({ isActive = false }) {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    if (isActive) setAnimKey((k) => k + 1)
  }, [isActive])

  return (
    <div className='max-w-7xl mx-auto flex gap-2.5 pt-10 pb-10'>
      <div className='max-w-[520px]'>
        <p className='text-[36px] font-googleSans pb-5'>
          <span className='text-[#1946b6]'>Chat</span>
          <span className='text-[#26b5e9]'>5</span>
          <span className='text-[#ef4444]'>0</span>
          <span className='text-[#f59e0b]'>0</span>
          <span className='text-[#84cc16]'>MG</span>
        </p>

        <p className='text-[48px] leading-15'>Your Secure Gateway to <br /> Seamless Business <br /> <span className='text-[#3b62c1]'>Communication</span></p>

        <p className='text-[#767676] pt-5 pb-5'>An all-in-one platform for limitless business communication, seamless meetings, dual-screen sharing, media exchange, and in-house bots, boosting productivity and collaboration</p>

        <button className='pt-2 pb-2 pl-5 pr-5 bg-[#1946b6] text-white rounded-md cursor-pointer'>Explore</button>
      </div>

      <div className='w-full h-[460px] relative overflow-hidden'>
        {/* AI Powered Chatbots card */}
        <div className='absolute top-10 left-1/4 -translate-x-1/2 w-[300px] max-w-[92%]'>
          <div key={`firstBanner-left-${animKey}`} className='animate-[slideInFromLeftOutside_800ms_ease-out_both] motion-reduce:animate-none'>
            <div className='relative rounded-2xl bg-white/70 backdrop-blur-md border border-violet-200 shadow-[0_12px_40px_rgba(124,58,237,0.18)]'>
              {/* top circle icon */}
              <div className='absolute -top-7 left-1/2 -translate-x-1/2'>
                <div className='h-14 w-14 rounded-full bg-gradient-to-tr from-fuchsia-500 to-violet-500 shadow-lg grid place-items-center ring-8 ring-white/70'>
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

              <div className='px-8 pt-7 pb-4 text-center'>
                <p className='text-[20px] leading-7 font-semibold text-[#5b2a86]'>
                  AI - Powered Chatbots
                  <br />
                  like Jira bot, MoM bot
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dual screen sharing card */}
        <div className='absolute bottom-5 right-19 w-fit max-w-[92%]'>
          <div key={`firstBanner-bottom-${animKey}`} className='animate-[slideInFromBottomOutside_800ms_ease-out_200ms_both] motion-reduce:animate-none'>
            <div className='relative rounded-2xl bg-white/70 backdrop-blur-md border border-violet-200 shadow-[0_12px_40px_rgba(124,58,237,0.18)]'>
              {/* top circle icon */}
              <div className='absolute -top-7 left-23'>
                <div className='h-14 w-14 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 shadow-lg grid place-items-center ring-8 ring-white/70'>
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

              <div className='pl-8 pr-10 pt-7 pb-5'>
                <p className='whitespace-nowrap text-[20px] font-semibold text-[#5b2a86]'>
                  Dual screen sharing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute left-0 bottom-15 w-[330.29px]'>
          <img src={HeroOne} alt="" />
        </div>

        <div className='absolute top-0 right-0 w-[330px]'>
          <img src={HeroTwo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FirstBanner