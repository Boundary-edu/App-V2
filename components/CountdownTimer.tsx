import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  /** Initial duration in seconds */
  duration?: number;
  /** Additional Tailwind CSS classes */
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration = 10, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    const endTime = Date.now() + duration * 1000;
    const intervalId = setInterval(() => {
      const remaining = (endTime - Date.now()) / 1000;
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1); // 50ms로 더 부드럽게

    return () => clearInterval(intervalId);
  }, [duration]);

  // Format time as MM:SS.ss (분:초.소수점2자리)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedSeconds = seconds < 10 ? `0${seconds.toFixed(2)}` : seconds.toFixed(2);

    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-2 bg-white rounded-2xl shadow-md ${className}`}
    >
      <div className="text-2xl font-bold text-gray-800 tabular-nums">
        {timeLeft > 0 ? formatTime(timeLeft) : "아웃!"}
      </div>
    </div>
  );
};

export default CountdownTimer;
