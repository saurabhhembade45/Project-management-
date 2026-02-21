import React from 'react';
import { Building2 } from 'lucide-react';

export default function Clients() {
  const clients = [
    {
      id: 1,
      clientName: 'TechVentures Inc',
      company: 'Technology',
      status: 'Active',
      contactPerson: 'John Smith',
    },
    {
      id: 2,
      clientName: 'Global Finance Corp',
      company: 'Finance',
      status: 'Active',
      contactPerson: 'Maria Garcia',
    },
    {
      id: 3,
      clientName: 'Retail Solutions Ltd',
      company: 'Retail',
      status: 'Active',
      contactPerson: 'Robert Taylor',
    },
    {
      id: 4,
      clientName: 'Healthcare Systems',
      company: 'Healthcare',
      status: 'Pending',
      contactPerson: 'Dr. Patricia White',
    },
    {
      id: 5,
      clientName: 'Education Plus',
      company: 'Education',
      status: 'Active',
      contactPerson: 'Dr. Alan Brown',
    },
    {
      id: 6,
      clientName: 'Manufacturing Pro',
      company: 'Manufacturing',
      status: 'Inactive',
      contactPerson: 'Tony Martinez',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return { bg: '#D1FAE5', text: '#065F46' };
      case 'Pending':
        return { bg: '#FEF3C7', text: '#92400E' };
      case 'Inactive':
        return { bg: '#FEE2E2', text: '#991B1B' };
      default:
        return { bg: '#F3F4F6', text: '#6B7280' };
    }
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#1F2937' }}>
        Clients
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
                  Client Name
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Company
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Contact Person
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, idx) => {
                const statusColor = getStatusColor(client.status);
                return (
                  <tr
                    key={client.id}
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
                        <Building2 size={16} color="#3B82F6" />
                        {client.clientName}
                      </div>
                    </td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                      {client.company}
                    </td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                      {client.contactPerson}
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
                        {client.status}
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
