import React, { JSX, useState } from 'react';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface SalesDataEntry {
  month: string;
  verkoop: number;
  kosten: number;
}

interface ProductDataEntry {
  name: string;
  waarde: number;
}

interface BezoekersDataEntry {
  name: string;
  bezoekers: number;
}

interface VersionDataEntry {
  name: string;
  value: number;
}

interface StatusSummary {
  active: number;
  warnings: number;
  errors: number;
  unreachable: number;
}

const salesData: SalesDataEntry[] = [
  { month: 'Jan', verkoop: 4520000, kosten: 2720000 },
  { month: 'Feb', verkoop: 3890000, kosten: 1998000 },
  { month: 'Mar', verkoop: 4120000, kosten: 3240000 },
  { month: 'Apr', verkoop: 5280000, kosten: 3808000 },
  { month: 'May', verkoop: 6190000, kosten: 4200000 },
  { month: 'Jun', verkoop: 5690000, kosten: 3980000 },
  { month: 'Jul', verkoop: 6240000, kosten: 4560000 },
];

const productData: ProductDataEntry[] = [
  { name: 'E-commerce', waarde: 12500 },
  { name: 'Corporate', waarde: 8700 },
  { name: 'Blog', waarde: 6400 },
  { name: 'Portfolio', waarde: 3200 },
  { name: 'Educational', waarde: 2100 },
];

const bezoekersData: BezoekersDataEntry[] = [
  { name: 'Week 1', bezoekers: 24500000 },
  { name: 'Week 2', bezoekers: 28750000 },
  { name: 'Week 3', bezoekers: 32200000 },
  { name: 'Week 4', bezoekers: 27800000 },
];

const moduleVersionData: VersionDataEntry[] = [
  { name: 'v10.0.0', value: 18500 },
  { name: 'v9.5.x', value: 12300 },
  { name: 'v9.4.x', value: 6700 },
  { name: 'v9.3.x', value: 4200 },
  { name: 'v9.2.x or older', value: 3300 },
];

const phpVersionData: VersionDataEntry[] = [
  { name: 'PHP 8.2+', value: 16200 },
  { name: 'PHP 8.1', value: 14500 },
  { name: 'PHP 8.0', value: 7800 },
  { name: 'PHP 7.4', value: 5200 },
  { name: 'PHP < 7.4', value: 1300 },
];

const statusSummary: StatusSummary = {
  active: 41200,
  warnings: 2450,
  errors: 850,
  unreachable: 500
};

const industryData: ProductDataEntry[] = [
  { name: 'Retail', waarde: 12400 },
  { name: 'Services', waarde: 9800 },
  { name: 'Manufacturing', waarde: 6500 },
  { name: 'Healthcare', waarde: 5200 },
  { name: 'Education', waarde: 4700 },
  { name: 'Finance', waarde: 3900 },
  { name: 'Other', waarde: 2500 },
];

const COLORS: string[] = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57', '#f7a399'];

export default function Dashboard(): JSX.Element {
  const [timeFilter, setTimeFilter] = useState<string>('month');

  const totalWebsites: number = 450;
  const activeUsers: string = "12.85";
  const conversionRate: string = "3.2%";
  const averageOrderValue: string = "€ 82,75";
  const totalTraffic: string = "145.2M";

  const websitesOnLatestVersion: number = moduleVersionData[0].value;
  const percentOnLatest: string = ((websitesOnLatestVersion / totalWebsites) * 100).toFixed(1);

  const formatNumber = (num: number): string | number => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num;
  };

  return (
    <div className='bg-gray-900 text-white min-h-screen p-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <div className='flex space-x-2'>
            <button
              className={`px-3 py-1 rounded ${timeFilter === 'week' ? 'bg-blue-600' : 'bg-gray-700'}`}
              onClick={() => setTimeFilter('week')}
            >
              Week
            </button>
            <button
              className={`px-3 py-1 rounded ${timeFilter === 'month' ? 'bg-blue-600' : 'bg-gray-700'}`}
              onClick={() => setTimeFilter('month')}
            >
              Month
            </button>
            <button
              className={`px-3 py-1 rounded ${timeFilter === 'quarter' ? 'bg-blue-600' : 'bg-gray-700'}`}
              onClick={() => setTimeFilter('quarter')}
            >
              Quarter
            </button>
          </div>
        </div>

        <div className='mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-gray-800 p-4 rounded shadow'>
              <p className='text-gray-400'>Total Websites</p>
              <p className='text-3xl font-bold'>{formatNumber(totalWebsites)}</p>
              <p className='text-green-500 text-sm'>+1.2K this month</p>
            </div>

            <div className='bg-gray-800 p-4 rounded shadow'>
              <p className='text-gray-400'>Active Websites</p>
              <p className='text-3xl font-bold'>{formatNumber(statusSummary.active)}</p>
              <p className='text-green-500 text-sm'>{((statusSummary.active / totalWebsites) * 100).toFixed(1)}% of total</p>
            </div>

            <div className='bg-gray-800 p-4 rounded shadow'>
              <p className='text-gray-400'>Latest Version (v10.0.0)</p>
              <p className='text-3xl font-bold'>{formatNumber(websitesOnLatestVersion)}</p>
              <p className='text-yellow-500 text-sm'>{percentOnLatest}% adoption rate</p>
            </div>

            <div className='bg-gray-800 p-4 rounded shadow'>
              <p className='text-gray-400'>Total Monthly Traffic</p>
              <p className='text-3xl font-bold'>{totalTraffic}</p>
              <p className='text-green-500 text-sm'>+6.8% vs last month</p>
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Monitoring Status</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='bg-green-900 p-4 rounded shadow'>
              <p className='text-gray-200'>Active</p>
              <p className='text-3xl font-bold'>{formatNumber(statusSummary.active)}</p>
              <p className='text-gray-300 text-sm'>{((statusSummary.active / totalWebsites) * 100).toFixed(1)}%</p>
            </div>

            <div className='bg-yellow-900 p-4 rounded shadow'>
              <p className='text-gray-200'>Warnings</p>
              <p className='text-3xl font-bold'>{formatNumber(statusSummary.warnings)}</p>
              <p className='text-gray-300 text-sm'>{((statusSummary.warnings / totalWebsites) * 100).toFixed(1)}%</p>
            </div>

            <div className='bg-red-900 p-4 rounded shadow'>
              <p className='text-gray-200'>Errors</p>
              <p className='text-3xl font-bold'>{formatNumber(statusSummary.errors)}</p>
              <p className='text-gray-300 text-sm'>{((statusSummary.errors / totalWebsites) * 100).toFixed(1)}%</p>
            </div>

            <div className='bg-gray-700 p-4 rounded shadow'>
              <p className='text-gray-200'>Unreachable</p>
              <p className='text-3xl font-bold'>{formatNumber(statusSummary.unreachable)}</p>
              <p className='text-gray-300 text-sm'>{((statusSummary.unreachable / totalWebsites) * 100).toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <div className='bg-gray-800 p-4 rounded shadow'>
            <h2 className='text-lg font-semibold mb-2'>Module Version Distribution</h2>
            <div className='h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                  <Pie
                    data={moduleVersionData}
                    cx='50%'
                    cy='50%'
                    outerRadius={80}
                    labelLine={false}
                    label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    dataKey='value'
                  >
                    {moduleVersionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [formatNumber(value), 'Websites']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-gray-800 p-4 rounded shadow'>
            <h2 className='text-lg font-semibold mb-2'>PHP Version Distribution</h2>
            <div className='h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                  <Pie
                    data={phpVersionData}
                    cx='50%'
                    cy='50%'
                    outerRadius={80}
                    labelLine={false}
                    label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    dataKey='value'
                  >
                    {phpVersionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [formatNumber(value), 'Websites']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Business Metrics</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-gray-800 p-4 rounded shadow'>
              <p className='text-gray-400'>Active Users</p>
              <p className='text-3xl font-bold'>{activeUsers}</p>
              <p className='text-green-500 text-sm'>+8.5% t.o.v. vorige maand</p>
            </div>

            <div className='bg-gray-800 p-4 rounded shadow'>
              <p className='text-gray-400'>Conversie Ratio</p>
              <p className='text-3xl font-bold'>{conversionRate}</p>
              <p className='text-red-500 text-sm'>-0.3% t.o.v. vorige maand</p>
            </div>

            <div className='bg-gray-800 p-4 rounded shadow'>
              <p className='text-gray-400'>Gemiddelde Orderwaarde</p>
              <p className='text-3xl font-bold'>{averageOrderValue}</p>
              <p className='text-green-500 text-sm'>+4.7% t.o.v. vorige maand</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <div className='bg-gray-800 p-4 rounded shadow'>
            <h2 className='text-lg font-semibold mb-2'>Maandelijkse Verkoop vs. Kosten (miljoen €)</h2>
            <div className='h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                  <XAxis dataKey='month' stroke='#9CA3AF' />
                  <YAxis stroke='#9CA3AF' tickFormatter={(value: number) => `${(value / 1000000).toFixed(1)}`} />
                  <Tooltip
                    formatter={(value: number) => [`€ ${(value / 1000000).toFixed(2)}M`, '']}
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                  />
                  <Legend />
                  <Line type='monotone' dataKey='verkoop' name='Verkoop' stroke='#8884d8' activeDot={{ r: 8 }} />
                  <Line type='monotone' dataKey='kosten' name='Kosten' stroke='#82ca9d' />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-gray-800 p-4 rounded shadow'>
            <h2 className='text-lg font-semibold mb-2'>Wekelijkse Bezoekers (miljoen)</h2>
            <div className='h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={bezoekersData}>
                  <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                  <XAxis dataKey='name' stroke='#9CA3AF' />
                  <YAxis stroke='#9CA3AF' tickFormatter={(value: number) => `${(value / 1000000).toFixed(0)}M`} />
                  <Tooltip
                    formatter={(value: number) => [`${(value / 1000000).toFixed(2)}M`, 'Bezoekers']}
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                  />
                  <Legend />
                  <Bar dataKey='bezoekers' name='Bezoekers' fill='#8884d8' />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='bg-gray-800 p-4 rounded shadow'>
            <h2 className='text-lg font-semibold mb-2'>Website Types</h2>
            <div className='h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                  <Pie
                    data={productData}
                    cx='50%'
                    cy='50%'
                    outerRadius={80}
                    labelLine={false}
                    label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    dataKey='waarde'
                  >
                    {productData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [formatNumber(value), 'Websites']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-gray-800 p-4 rounded shadow'>
            <h2 className='text-lg font-semibold mb-2'>Industry Distribution</h2>
            <div className='h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                  <Pie
                    data={industryData}
                    cx='50%'
                    cy='50%'
                    outerRadius={80}
                    labelLine={false}
                    label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    dataKey='waarde'
                  >
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [formatNumber(value), 'Websites']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}