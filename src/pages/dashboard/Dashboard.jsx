import { useEffect, useState } from "react";
import ChartSection from "../../components/dashboard/ChartSection";
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

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    totalDepartments: 0,
    recentStudents: [],
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col gap-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value={stats.totalStudents}
            icon={<FaUserGraduate size={24} />}
            color="bg-blue-500"
          />

          <StatCard
            title="Courses"
            value="18"
            icon={<FaBook size={24} />}
            color="bg-green-500"
          />

          <StatCard
            title="Attendance"
            value="92%"
            icon={<FaClipboardCheck size={24} />}
            color="bg-yellow-500"
          />

          <StatCard
            title="Fees Collected"
            value="₹2.45L"
            icon={<FaMoneyBillWave size={24} />}
            color="bg-purple-500"
          />
        </div>

        <ChartSection />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <RecentStudents studentsData = {stats} />
          </div>

          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
