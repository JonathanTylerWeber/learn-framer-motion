import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LearnRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/learn/basics');
  }, [navigate]);

  return null;
};

const Learn = () => {
  return (
    <div>
      <LearnRedirect />
      <Outlet />
    </div>
  )
}

export default Learn