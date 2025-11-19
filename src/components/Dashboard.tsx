import React, { useState } from 'react';
import {
  AlertRegular,
  PowerRegular,
  WaterRegular,
  StatusRegular,
} from '@fluentui/react-icons';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import WelcomeCard from './WelcomeCard';
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import '../styles/Dashboard.css';

// Mock data
const pieChartData = [
  { name: 'Healthy', value: 80 },
  { name: 'Warning', value: 30 },
  { name: 'Critical', value: 30 },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const lineChartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const waterData = [
  { name: 'Rainwater', value: 80 },
  { name: 'Ground Water', value: 30 },
  { name: 'Recycled Water', value: 30 },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Water' | 'Energy'>('Water');

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <WelcomeCard
          userName="Rajesh"
          subtitle="Pretium vulputate fermentum nec neque scelerisque."
          userImage="/api/placeholder/80/80"
          onAddWidgets={() => console.log('Add widgets clicked')}
        />

        <div className="stats-grid">
          <StatCard
            icon={<AlertRegular />}
            title="Active Alarms"
            value={30}
            change="+23% since last month"
            isPositive={true}
            bgColor="#fff5f5"
            iconBgColor="#ef4444"
          />
          <StatCard
            icon={<PowerRegular />}
            title="Energy Consumption"
            value={112430}
            unit=" kWh"
            change="+23% since last month"
            isPositive={true}
            bgColor="#f0fdf4"
            iconBgColor="#10b981"
          />
          <StatCard
            icon={<WaterRegular />}
            title="Water Consumption"
            value={14520}
            unit=" kL"
            change="+23% since last month"
            isPositive={true}
            bgColor="#f0f9ff"
            iconBgColor="#3b82f6"
          />
          <StatCard
            icon={<StatusRegular />}
            title="Asset Health Score"
            value={89}
            unit=" / 100"
            change="+23% since last month"
            isPositive={true}
            bgColor="#f0fdf4"
            iconBgColor="#10b981"
          />
        </div>

        <div className="charts-grid">
          <ChartCard title="Asset Analytics" filter="Hourly">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-legend">
              {pieChartData.map((item, index) => (
                <div key={item.name} className="legend-item">
                  <span
                    className="legend-color"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  <span className="legend-label">
                    {item.name} - {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Process Performance" filter="Hourly">
            <div className="process-performance">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === 'Water' ? 'active' : ''}`}
                  onClick={() => setActiveTab('Water')}
                >
                  Water
                </button>
                <button
                  className={`tab ${activeTab === 'Energy' ? 'active' : ''}`}
                  onClick={() => setActiveTab('Energy')}
                >
                  Energy
                </button>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={activeTab === 'Water' ? waterData : pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {(activeTab === 'Water' ? waterData : pieChartData).map(
                      (entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      )
                    )}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <div className="performance-data">
                <h4>{activeTab} Recycling Efficiency</h4>
                <div className="data-items">
                  {(activeTab === 'Water' ? waterData : pieChartData).map(
                    (item) => (
                      <div key={item.name} className="data-row">
                        <span>{item.name}</span>
                        <span className="data-value">{item.value}%</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </ChartCard>
        </div>

        <ChartCard title="Trends" filter="Hourly">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#c41e3a"
                strokeWidth={2}
                dot={{ fill: '#c41e3a', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default Dashboard;
