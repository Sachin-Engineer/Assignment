import React, { useState, useRef } from 'react';
import LaunchingSoftware from '../assets/images/LaunchingSoftware.png';
// Assuming the video is an mp4 file placed in assets/images
import LaunchingSoftwareVideo from '../assets/LaunchingSoftwareVideo.mp4';

const LaunchingSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Start playback once video element is in DOM
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 0);
  };

  return (
    <section>
      <div style={{ margin: '50px auto' }} className='max-w-[1300px]'>
        <div style={{
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
          marginBottom: 40,
          position: 'relative'
        }}>
          {isPlaying ? (
            <video
              ref={videoRef}
              src={LaunchingSoftwareVideo}
              controls
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          ) : (
            <>
              <img
                src={LaunchingSoftware}
                alt="Team working in a modern office"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {/* Play icon button at top-right */}
              <button
                onClick={handlePlayClick}
                aria-label="Play video"
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 9999,
                  padding: 10,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1d4ed8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7-11-7z" />
                </svg>
              </button>
            </>
          )}
        </div>

        <h2 style={{
          textAlign: 'center',
          fontWeight: 500,
          fontSize: 'clamp(22px, 4.5vw, 36px)',
          color: '#111827',
          margin: 0,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          padding: '0 8px'
        }}>
          Launching <span style={{ color: '#1d4ed8' }}>software/application</span> shouldn’t feel like rocket science
        </h2>

        <p style={{
          textAlign: 'center',
          maxWidth: 'min(900px, 92vw)',
          margin: 'clamp(12px, 2.5vw, 16px) auto 0',
          color: '#6b7280',
          lineHeight: 1.7,
          fontWeight: 300,
          fontSize: 'clamp(14px, 2.6vw, 18px)',
          padding: '0 8px'
        }}>
          We’re not just developers; we’re partners in your vision. From the first spark of an idea to a fully launched product,
          we simplify complexity, solve real problems, and build digital experiences that scale with you.
        </p>
      </div>
    </section>
  );
};

export default LaunchingSection;
