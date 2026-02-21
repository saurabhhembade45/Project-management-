import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

export default function Settings() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@company.com',
    notifications: true,
    twoFactor: false,
  });

  const [saved, setSaved] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#1F2937' }}>
        Settings
      </h1>

      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          maxWidth: '600px',
        }}
      >
        <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px', color: '#1F2937' }}>
          Account Settings
        </h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#6B7280', marginBottom: '6px' }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#6B7280', marginBottom: '6px' }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '20px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: '#1F2937' }}>
            Preferences
          </h3>

          <div style={{ marginBottom: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
              }}
            >
              <div>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#1F2937', marginBottom: '2px' }}>
                  Email Notifications
                </p>
                <p style={{ fontSize: '12px', color: '#6B7280' }}>
                  Receive updates about your projects
                </p>
              </div>
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleInputChange}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
              }}
            >
              <div>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#1F2937', marginBottom: '2px' }}>
                  Two-Factor Authentication
                </p>
                <p style={{ fontSize: '12px', color: '#6B7280' }}>
                  Enhanced security for your account
                </p>
              </div>
              <input
                type="checkbox"
                name="twoFactor"
                checked={formData.twoFactor}
                onChange={handleInputChange}
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleSave}
              style={{
                padding: '10px 20px',
                backgroundColor: '#3B82F6',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3B82F6';
              }}
            >
              {saved ? <Check size={16} /> : null}
              {saved ? 'Saved' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          maxWidth: '600px',
          marginTop: '20px',
        }}
      >
        <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#1F2937' }}>
          Danger Zone
        </h2>

        <div
          style={{
            padding: '12px',
            backgroundColor: '#FEF2F2',
            borderRadius: '8px',
            border: '1px solid #FEE2E2',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#DC2626', marginBottom: '2px' }}>
              Delete Account
            </p>
            <p style={{ fontSize: '12px', color: '#991B1B' }}>
              Permanently delete your account and all data
            </p>
          </div>
          <ChevronRight size={18} color="#DC2626" />
        </div>
      </div>
    </div>
  );
}
