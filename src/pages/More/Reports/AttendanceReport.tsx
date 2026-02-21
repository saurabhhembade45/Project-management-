import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Attendance() {
  const [searchTerm, setSearchTerm] = useState('');

  const attendanceData = [
    {
      id: 1,
      employee: 'Sarah Johnson',
      date: '2025-02-21',
      hoursWorked: 8.5,
      status: 'Present',
    },
    {
      id: 2,
      employee: 'Michael Chen',
      date: '2025-02-21',
      hoursWorked: 8,
      status: 'Present',
    },
    {
      id: 3,
      employee: 'Emma Williams',
      date: '2025-02-21',
      hoursWorked: 7.5,
      status: 'Present',
    },
    {
      id: 4,
      employee: 'James Miller',
      date: '2025-02-21',
      hoursWorked: 0,
      status: 'Absent',
    },
    {
      id: 5,
      employee: 'Lisa Anderson',
      date: '2025-02-21',
      hoursWorked: 8,
      status: 'Present',
    },
    {
      id: 6,
      employee: 'David Brown',
      date: '2025-02-21',
      hoursWorked: 4,
      status: 'Half Day',
    },
    {
      id: 7,
      employee: 'Sarah Johnson',
      date: '2025-02-20',
      hoursWorked: 8,
      status: 'Present',
    },
    {
      id: 8,
      employee: 'Michael Chen',
      date: '2025-02-20',
      hoursWorked: 8.5,
      status: 'Present',
    },
  ];

  const filteredData = attendanceData.filter((record) =>
    record.employee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present':
        return { bg: '#D1FAE5', text: '#065F46' };
      case 'Absent':
        return { bg: '#FEE2E2', text: '#991B1B' };
      case 'Half Day':
        return { bg: '#FEF3C7', text: '#92400E' };
      default:
        return { bg: '#F3F4F6', text: '#6B7280' };
    }
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#1F2937' }}>
        Attendance
      </h1>

      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          marginBottom: '20px',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#6B7280', marginBottom: '8px' }}>
            Search Employee
          </label>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} />
            <input
              type="text"
              placeholder="Type employee name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px 10px 40px',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
              }}
            />
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Employee
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Date
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Hours Worked
                </th>
                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((record, idx) => {
                  const statusColor = getStatusColor(record.status);
                  return (
                    <tr
                      key={record.id}
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
                        {record.employee}
                      </td>
                      <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                        {record.date}
                      </td>
                      <td style={{ padding: '12px 8px', fontSize: '14px', color: '#374151' }}>
                        {record.hoursWorked}h
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
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      padding: '20px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#9CA3AF',
                    }}
                  >
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
