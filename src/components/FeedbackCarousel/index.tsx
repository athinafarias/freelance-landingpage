'use client';

import { useState, useEffect, useRef } from 'react';
import CardFeedback from '../CardFeedback';
import styles from './styles.module.css';

interface Feedback {
    srcImg: string;
    nome: string;
    cargo: string;
    text: string;
    data: string;
}

interface FeedbackCarouselProps {
    feedbacks: Feedback[];
}

const FeedbackCarousel = ({ feedbacks }: FeedbackCarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const startXRef = useRef(0);
    const isDraggingRef = useRef(false);

    // Detecta se é mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Touch/Mouse handlers para navegação
    const handleStart = (clientX: number) => {
        startXRef.current = clientX;
        isDraggingRef.current = true;
        if (trackRef.current) {
            trackRef.current.style.transition = 'none';
        }
    };

    const handleEnd = (clientX: number) => {
        if (!isDraggingRef.current) return;
        
        const diff = startXRef.current - clientX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentSlide < feedbacks.length - 1) {
                setCurrentSlide(prev => prev + 1);
            } else if (diff < 0 && currentSlide > 0) {
                setCurrentSlide(prev => prev - 1);
            }
        }
        
        isDraggingRef.current = false;
        if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
        }
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        handleEnd(e.changedTouches[0].clientX);
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleStart(e.clientX);
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        handleEnd(e.clientX);
    };

    const handleMouseLeave = () => {
        isDraggingRef.current = false;
        if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
        }
    };

    // Renderização mobile (carousel)
    if (isMobile) {
        return (
            <div className={styles.carouselContainer}>
                <div className={styles.mobileCarousel}>
                    <div 
                        className={styles.carouselWrapper}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div 
                            ref={trackRef}
                            className={styles.carouselTrack}
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                                transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
                            }}
                        >
                            {feedbacks.map((feedback, index) => (
                                <div key={index} className={styles.carouselSlide}>
                                    <CardFeedback {...feedback} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots de navegação */}
                    <div className={styles.dotsContainer}>
                        {feedbacks.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Ir para slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Renderização desktop (grid)
    return (
        <div className={`grid ${styles.desktopGrid}`}>
            {feedbacks.map((feedback, index) => (
                <CardFeedback key={index} {...feedback} />
            ))}
        </div>
    );
};

export default FeedbackCarousel; 