import React from 'react';
import { MapPin } from 'lucide-react';

export default function JobSites() {
  const jobSites = [
    {
      id: 1,
      location: 'New York Office',
      project: 'Alpha Initiative',
      manager: 'Sarah Johnson',
      status: 'Active',
    },
    {
      id: 2,
      location: 'San Francisco HQ',
      project: 'Beta Platform',
      manager: 'Michael Chen',
      status: 'Active',
    },
    {
      id: 3,
      location: 'London Satellite',
      project: 'Gamma Project',
      manager: 'Emma Williams',
      status: 'Active',
    },
    {
      id: 4,
      location: 'Toronto Branch',
      project: 'Delta Expansion',
      manager: 'James Miller',
      status: 'Planning',
    },
    {
      id: 5,
      location: 'Sydney Office',
      project: 'Epsilon Initiative',
      manager: 'Lisa Anderson',
      status: 'Active',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active'
      ? { bg: '#D1FAE5', text: '#065F46' }
      : { bg: '#FEF3C7', text: '#92400E' };
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#1F2937' }}>
        Job Sites
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
                  Location
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Project
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Manager
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {jobSites.map((site, idx) => {
                const statusColor = getStatusColor(site.status);
                return (
                  <tr
                    key={site.id}
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
                        <MapPin size={16} color="#3B82F6" />
                        {site.location}
                      </div>
                    </td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                      {site.project}
                    </td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                      {site.manager}
                    </td>
                    <td style={{ padding: '12px 8px', fontSize: '12px' }}>
                      <span
                        style={{
                          backgroundColor: statusColor.bg,
                          color: statusColor.text,
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontWeight: 500,
                        }}
                      >
                        {site.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
