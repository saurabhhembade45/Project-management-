import React from 'react';
import { User, Mail } from 'lucide-react';

export default function Employees() {
  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      email: 'sarah.johnson@company.com',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Developer',
      email: 'michael.chen@company.com',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Designer',
      email: 'emma.williams@company.com',
      status: 'Active',
    },
    {
      id: 4,
      name: 'James Miller',
      role: 'QA Engineer',
      email: 'james.miller@company.com',
      status: 'On Leave',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'DevOps Engineer',
      email: 'lisa.anderson@company.com',
      status: 'Active',
    },
    {
      id: 6,
      name: 'David Brown',
      role: 'Backend Developer',
      email: 'david.brown@company.com',
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
        Employees
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
                  Name
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Role
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Email
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, idx) => {
                const statusColor = getStatusColor(employee.status);
                return (
                  <tr
                    key={employee.id}
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
                        <User size={16} color="#6B7280" />
                        {employee.name}
                      </div>
                    </td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                      {employee.role}
                    </td>
                    <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Mail size={14} color="#9CA3AF" />
                        {employee.email}
                      </div>
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
                        {employee.status}
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
