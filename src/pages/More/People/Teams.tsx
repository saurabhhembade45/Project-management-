import React from 'react';
import { Users } from 'lucide-react';

export default function Teams() {
  const teams = [
    {
      id: 1,
      teamName: 'Design Team',
      members: 8,
      activeProjects: 5,
      lead: 'Emma Williams',
    },
    {
      id: 2,
      teamName: 'Development Team',
      members: 12,
      activeProjects: 8,
      lead: 'Michael Chen',
    },
    {
      id: 3,
      teamName: 'QA Team',
      members: 5,
      activeProjects: 4,
      lead: 'James Miller',
    },
    {
      id: 4,
      teamName: 'DevOps Team',
      members: 3,
      activeProjects: 2,
      lead: 'Lisa Anderson',
    },
    {
      id: 5,
      teamName: 'Marketing Team',
      members: 6,
      activeProjects: 3,
      lead: 'Sarah Johnson',
    },
  ];

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#1F2937' }}>
        Teams
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
                  Team Lead
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
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
                      {team.teamName}
                    </div>
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    <span
                      style={{
                        backgroundColor: '#EFF6FF',
                        color: '#1E40AF',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      {team.members}
                    </span>
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    {team.activeProjects}
                  </td>
                  <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                    {team.lead}
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
