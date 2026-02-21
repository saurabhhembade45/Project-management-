import React from 'react';
import { BarChart3, Activity, Award, Target } from 'lucide-react';

export default function PersonalInsights() {
  const performanceCards = [
    {
      icon: Activity,
      title: 'Task Completion',
      value: '28/35',
      percentage: '80%',
      color: '#3B82F6',
    },
    {
      icon: Award,
      title: 'Quality Score',
      value: '9.2/10',
      percentage: '92%',
      color: '#10B981',
    },
    {
      icon: Target,
      title: 'Goals Achieved',
      value: '5/6',
      percentage: '83%',
      color: '#F59E0B',
    },
    {
      icon: BarChart3,
      title: 'Efficiency',
      value: '94%',
      percentage: '94%',
      color: '#8B5CF6',
    },
  ];

  const weeklySummary = [
    { day: 'Monday', hours: 8, tasks: 5, status: 'Completed' },
    { day: 'Tuesday', hours: 8.5, tasks: 6, status: 'Completed' },
    { day: 'Wednesday', hours: 8, tasks: 5, status: 'Completed' },
    { day: 'Thursday', hours: 7.5, tasks: 4, status: 'In Progress' },
    { day: 'Friday', hours: 8, tasks: 5, status: 'Completed' },
  ];

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#1F2937' }}>
        Personal Insights
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '20px',
        }}
      >
        {performanceCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                <Icon size={24} color={card.color} strokeWidth={1.5} />
              </div>
              <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px', fontWeight: 500 }}>
                {card.title}
              </p>
              <p style={{ fontSize: '20px', fontWeight: 700, color: '#1F2937', marginBottom: '8px' }}>
                {card.value}
              </p>
              <div style={{ backgroundColor: '#E5E7EB', borderRadius: '4px', height: '4px', overflow: 'hidden' }}>
                <div
                  style={{
                    backgroundColor: card.color,
                    height: '100%',
                    width: card.percentage,
                    transition: 'width 0.3s',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1F2937' }}>
          Weekly Summary
        </h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Day
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Hours Worked
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Tasks
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {weeklySummary.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid #F3F4F6',
                    backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                  }}
                >
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151', fontWeight: 500 }}>
                    {row.day}
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    {row.hours}h
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    {row.tasks}
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '12px' }}>
                    <span
                      style={{
                        backgroundColor: row.status === 'Completed' ? '#D1FAE5' : '#FEF3C7',
                        color: row.status === 'Completed' ? '#065F46' : '#92400E',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
