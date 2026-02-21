import React from 'react';
import { TrendingUp, Users, Clock, Zap } from 'lucide-react';

export default function Overview() {
  const statCards = [
    {
      icon: Zap,
      title: 'Active Projects',
      value: '12',
      color: '#3B82F6',
    },
    {
      icon: TrendingUp,
      title: 'Productivity',
      value: '92%',
      color: '#10B981',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: '168h',
      color: '#F59E0B',
    },
    {
      icon: Users,
      title: 'Team Utilization',
      value: '85%',
      color: '#8B5CF6',
    },
  ];

  const recentActivity = [
    { id: 1, action: 'John Doe completed Project Alpha', time: '2 hours ago' },
    { id: 2, action: 'Team meeting scheduled for tomorrow', time: '4 hours ago' },
    { id: 3, action: 'New client onboarded', time: '1 day ago' },
    { id: 4, action: 'Quarterly review completed', time: '2 days ago' },
  ];

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#1F2937' }}>
        Insights Overview
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '20px',
        }}
      >
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px', fontWeight: 500 }}>
                    {card.title}
                  </p>
                  <p style={{ fontSize: '24px', fontWeight: 700, color: '#1F2937' }}>
                    {card.value}
                  </p>
                </div>
                <Icon size={28} color={card.color} strokeWidth={1.5} />
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
          Recent Activity
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {recentActivity.map((item) => (
            <div
              key={item.id}
              style={{
                padding: '12px',
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
                borderLeft: '3px solid #3B82F6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p style={{ fontSize: '14px', color: '#374151' }}>{item.action}</p>
              <p style={{ fontSize: '12px', color: '#9CA3AF' }}>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
