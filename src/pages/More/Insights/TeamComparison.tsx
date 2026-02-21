import React from 'react';
import { Users } from 'lucide-react';

export default function TeamComparison() {
  const teamData = [
    {
      id: 1,
      name: 'Design Team',
      members: 8,
      productivity: 88,
      activeProjects: 5,
      avgHours: 7.8,
      status: 'High Performance',
    },
    {
      id: 2,
      name: 'Development Team',
      members: 12,
      productivity: 92,
      activeProjects: 8,
      avgHours: 8.2,
      status: 'Excellent',
    },
    {
      id: 3,
      name: 'QA Team',
      members: 5,
      productivity: 85,
      activeProjects: 4,
      avgHours: 7.5,
      status: 'Good',
    },
    {
      id: 4,
      name: 'Marketing Team',
      members: 6,
      productivity: 80,
      activeProjects: 3,
      avgHours: 7.2,
      status: 'Good',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent':
        return '#10B981';
      case 'High Performance':
        return '#3B82F6';
      case 'Good':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#1F2937' }}>
        Team Comparison
      </h1>

      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Team Name
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Members
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Active Projects
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Avg Hours
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Productivity
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((team, idx) => (
                <tr
                  key={team.id}
                  style={{
                    borderBottom: '1px solid #F3F4F6',
                    backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F0F4FF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB';
                  }}
                >
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#1F2937', fontWeight: 500 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Users size={16} color="#3B82F6" />
                      {team.name}
                    </div>
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    {team.members}
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    {team.activeProjects}
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    {team.avgHours}h
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ backgroundColor: '#E5E7EB', borderRadius: '4px', height: '4px', width: '60px' }}>
                        <div
                          style={{
                            backgroundColor: getStatusColor(team.status),
                            height: '100%',
                            width: `${team.productivity}%`,
                          }}
                        />
                      </div>
                      <span>{team.productivity}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '12px' }}>
                    <span
                      style={{
                        backgroundColor: `${getStatusColor(team.status)}20`,
                        color: getStatusColor(team.status),
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      {team.status}
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
