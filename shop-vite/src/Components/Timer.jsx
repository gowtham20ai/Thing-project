
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/FormLogin");
    }, 3000); // 3000 milliseconds = 4 seconds

    return () => clearTimeout(timerId); // Cleanup the timer on component unmount
  }, [navigate]);

  return null;
}

export default Timer;