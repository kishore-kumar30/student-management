import { useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentStudents from "../../components/dashboard/RecentStudents";
import StatCard from "../../components/dashboard/StatCard";
import {
  FaUserGraduate,
  FaBook,
  FaClipboardCheck,
  FaMoneyBillWave,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { getDashboardStats } from "../../services/dashboardService";
import Loader from "../../components/common/Loader";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    totalDepartments: 0,
    recentStudents: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-y-3">
      <DashboardHeader />
        <div className="grid grid-cols-1 gap-y-2">
            <RecentStudents studentsData={stats} />
          <QuickActions />
        </div>
    </div>
  );
};

export default Dashboard;
